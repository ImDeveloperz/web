const creatorPara = ({ content }) => {
    return () =>  {
        <div className="creat__para">
            <p>{content}</p>
        </div>
        }

    }
    const creatorTitle=({ content }) =>{
        return () =>  {
            <div className="creat__Title">
                <h3>{content}</h3>
            </div>
            }
    }
    const creatorImage = ({ alt, url }) => {
        if (alt.length != 0 && url.length != 0)
            return null;
        return  () => {
            <div>
                <img alt={alt} url={url} />
            </div>       
         }
        }
    const blogData = {
        title: 'blog',
        payload: [
            {
                title: creatorTitle({ content : 'Programmation'}),
                date: '',
                user: {},
                payload: [
                    {
                        type: 'paragraphe',
                        payload: creatorPara({content:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero '})
                    },
                    {
                        type: 'image',
                        payload: creatorImage({ content: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero'})
                    }
                ]
            }, {
                title: creatorTitle({content:"Robotique"}),
                date: '',
                user: {},
                payload: [
                    {
                        type: 'paragraphe',
                        payload: creatorPara({content:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero '})
                    },
                    {
                        type: 'image',
                        payload: creatorImage({ content: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero'})
                    }
                ]
            },{
                title: creatorTitle({content:"Devoloppement"}),
                date: '',
                user: {},
                payload: [
                    {
                        type: 'paragraphe',
                        payload: creatorPara({content:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero '})
                    },
                    {
                        type: 'image',
                        payload: creatorImage({ content: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero'})
                    }
                ]
            }
        ]
    }
    export default blogData;