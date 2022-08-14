export type MenuItem = {
    id: string,
    label: string,
    url?: string,
    child?: MenuItem[]
}
type Menu = MenuItem[];

export default () => {
    const menu = [
        {id:"1",label: 'Product', url:"/product", child:[
            {id:"1-1",label:"Features", url:"/features"},
            {id:"1-2",label:"Comparison of Versions", url:"/comparison-of-versions"},
            {id:"1-3",label:"Cloud", url:"/features"},
        ] }, 
        {id:"2",label: 'Solution', url:"/solution", child:[
            {id:"2-1",label:"Document Management", url:"/features"},
            {id:"2-2",label:"Records Management", url:"/features"},
            {id:"2-3",label:"Knowledge Management", url:"/features"},
            {id:"2-4",label:"Enterprise Content Management", url:"/features"},
            {id:"2-5",label:"Modules", url:"/feature"},
        ]  }, 
        {id:"3",label: 'Services', url:"/services", child:[
            {id:"3-1",label:"Document Management", url:"/feature"},
            {id:"3-2",label:"Records Management", url:"/feature"},
            {id:"3-3",label:"Knowledge Management", url:"/feature"},
            {id:"3-4",label:"Enterprise Content Management", url:"/feature"},
            {id:"3-4",label:"Modules", url:"/feature"},
        ]  }, 
        {id:"4",label: 'Resources', url:"/resources", child:[]  }, 
        // {id:"5",label: 'Partners', url:"/partner", child:[]  }, 
    ]
    const footerMenu = [
        {id:"1",label: 'Product', url:"/product", child:[
            {id:"1-1",label:"Features", url:"/feature"},
            {id:"1-2",label:"Comparison of Versions", url:"/feature"},
            {id:"1-3",label:"Cloud", url:"/feature"},
        ] }, 
        {id:"2",label: 'Solution', url:"/solution", child:[
            {id:"2-1",label:"Document Management", url:"/feature"},
            {id:"2-2",label:"Records Management", url:"/feature"},
            {id:"2-3",label:"Knowledge Management", url:"/feature"},
            {id:"2-4",label:"Enterprise Content Management", url:"/feature"},
            {id:"2-5",label:"Modules", url:"/feature"},
        ]  }, 
        {id:"3",label: 'Services', url:"/services", child:[
            {id:"3-1",label:"Document Management", url:"/feature"},
            {id:"3-2",label:"Records Management", url:"/feature"},
            {id:"3-3",label:"Knowledge Management", url:"/feature"},
            {id:"3-4",label:"Enterprise Content Management", url:"/feature"},
            {id:"3-4",label:"Modules", url:"/feature"},
        ],
      },
      {id:"4",label: 'Resources', url:"/resources", child:[]  }, 
    ]

    
    return {
        menu,
        footerMenu
    }
}