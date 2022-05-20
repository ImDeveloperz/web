/*const creatImage=({alt,url}) =>{
    if(alt.length!=0 && url.length!=0)
     return null ;
return(
    alt,url
)
}*/
const blogData = {
    title: 'blog',
    payload: [
        {
            title: 'Programation',
            date: '',
            user: {},
            payload: [
                {
                    type: 'paragraphe',
                    payload : {
                        url : {},
                         alt : ''
                    }
                },
                {
                    type: 'image',
                    payload: {
                   url: '',
                   alt : ""
                    }
                }
            ]
        },{
            title:'Robotique',
            date:'',
            user:{},
            payload: [
                {
                    type: 'image',
                    payload: {
                        url: {},
                        alt: '',
                    }
                },
                {
                    type: 'paragraphe',
                    payload: {
                        content: ''
                    }
                }
            ]
        }
    ]
}
export default blogData