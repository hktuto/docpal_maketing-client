<template>
  <div id="SelectiveRenderTargets">
    <div class="SelectiveRenderTargets-element" :key="index" v-for="index in 5">
      <div class="SelectiveRenderTargets-title">Title {{ index }}</div>
      <div class="SelectiveRenderTargets-element-inner">
        <RenderTarget uniqueKey="distortionTarget">
          <ShaderPass :params="distortionPassParams" @render="onPassRender">
            <Plane class="SelectiveRenderTargets-plane" :params="planeParams">
              <img
                :src="
                  'https://unsplash.it/1920/1080?random=' + (imageID + index)
                "
                data-sampler="uTexture"
                alt=""
              />
            </Plane>
          </ShaderPass>
        </RenderTarget>

        <RenderTarget uniqueKey="rgbTarget">
          <ShaderPass :params="rgbPassParams" @render="onPassRender">
            <Plane
              class="SelectiveRenderTargets-small-plane"
              :params="planeParams"
            >
              <img
                :src="
                  'https://unsplash.it/1920/1080?random=' + (imageID + index)
                "
                data-sampler="uTexture"
                alt=""
              />
            </Plane>
          </ShaderPass>
        </RenderTarget>
      </div>
    </div>

    <ShaderPass
      :params="blurPassParams"
      @render="onPassRender"
      @ready="setPassResolution"
      @after-resize="setPassResolution"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import { Vec2 } from "curtainsjs";
import {
  Plane,
  RenderTarget,
  ShaderPass,
  useCurtainsEvent,
} from "vue-curtains";
import { fragmentShader, vertexShader } from "~/shaders/multiple-planes";
import { distortionFs, rgbFs, blurFs } from "~/shaders/selective-passes";

export default {
  name: "SelectiveRenderTargets",
  components: {
    Plane,
    RenderTarget,
    ShaderPass,
  },
  setup() {
    const imageID = Math.round(Math.random() * 50);
    const nbPlanes = ref(4);

    const planeParams = {
      vertexShader,
      fragmentShader,
    };

    let planesDeformations = 0;

    useCurtainsEvent("onRender", (curtains) => {
      // update our planes deformation
      // increase/decrease the effect
      planesDeformations = curtains.lerp(planesDeformations, 0, 0.075);
    });

    useCurtainsEvent("onScroll", (curtains) => {
      // get scroll deltas to apply the effect on scroll
      const delta = curtains.getScrollDeltas();

      // invert value for the effect
      delta.y = -delta.y;

      // threshold
      if (delta.y > 60) {
        delta.y = 60;
      } else if (delta.y < -60) {
        delta.y = -60;
      }

      if (Math.abs(delta.y) > Math.abs(planesDeformations)) {
        planesDeformations = curtains.lerp(planesDeformations, delta.y, 0.5);
      }
    });

    // selective passes
    const distortionPassParams = {
      fragmentShader: distortionFs,
      uniforms: {
        scrollEffect: {
          name: "uScrollEffect",
          type: "1f",
          value: 0,
        },
      },
    };

    const rgbPassParams = {
      fragmentShader: rgbFs,
      depthTest: false,
      uniforms: {
        scrollEffect: {
          name: "uScrollEffect",
          type: "1f",
          value: 0,
        },
      },
    };

    const blurPassParams = {
      fragmentShader: blurFs,
      uniforms: {
        scrollEffect: {
          name: "uScrollEffect",
          type: "1f",
          value: 0,
        },
        resolution: {
          name: "uResolution",
          type: "2f",
          value: new Vec2(),
        },
      },
    };

    const onPassRender = (pass) => {
      // update the uniform
      pass.uniforms.scrollEffect.value = planesDeformations;
    };

    const setPassResolution = (pass) => {
      const passBBox = pass.getBoundingRect();
      pass.uniforms.resolution.value = new Vec2(
        passBBox.width,
        passBBox.height
      );
    };

    return {
      imageID,
      nbPlanes,
      planeParams,
      distortionPassParams,
      rgbPassParams,
      blurPassParams,
      onPassRender,
      setPassResolution,
    };
  },
};
</script>

<style scoped>
#SelectiveRenderTargets {
  width: 80vw;
  margin: 0 auto;
  padding: 40px 0;
  position: relative;
  z-index: 2;
  text-align: center;
}

.SelectiveRenderTargets-element {
  width: 75%;
  height: 60vh;
  margin: 10vh 25% 10vh 0;
  position: relative;
}

.SelectiveRenderTargets-element:nth-child(even) {
  margin: 10vh 0 10vh 25%;
}

.SelectiveRenderTargets-element:first-child {
  margin-top: 5vh;
}

.SelectiveRenderTargets-element:last-child {
  margin-bottom: 20vh;
}

.SelectiveRenderTargets-element-inner {
  box-sizing: border-box;
  padding: 40px;
  position: static;
}

.SelectiveRenderTargets-title {
  color: white;
  position: absolute;
  top: 25%;
  left: 25%;
  font-size: 2em;
  font-weight: 700;
  background: #ee6557;
  display: inline-block;
  padding: 0.125em 0.25em;
}

.SelectiveRenderTargets-plane {
  position: absolute;
  top: 0;
  right: 15%;
  bottom: 17.5vh;
  left: 0;
}

.SelectiveRenderTargets-element:nth-child(even) .SelectiveRenderTargets-plane {
  right: 0;
  left: 15%;
}

.SelectiveRenderTargets-small-plane {
  position: absolute;
  right: 0;
  bottom: 0;

  width: 45%;
  height: 45vh;
}

.SelectiveRenderTargets-element:nth-child(even)
  .SelectiveRenderTargets-small-plane {
  right: auto;
  left: 0;
}

.SelectiveRenderTargets-plane img,
.SelectiveRenderTargets-small-plane img {
  display: none;
}
</style>