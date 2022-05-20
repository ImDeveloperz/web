const creatorPara = ({ content }) => {
    return () =>  (
        <div className="creat__para">
            <p>{content}</p>
        </div>
    )

    }
    const creatorImage = ({ alt, url }) => {
        if (alt.length != 0 && url.length != 0)
            return null;
        return (
            alt, url
        )
    }
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
                        payload: {
                            url: {},
                            alt: ''
                        }
                    },
                    {
                        type: 'image',
                        payload: {
                            url: '',
                            alt: ""
                        }
                    }
                ]
            }, {
                title: 'Robotique',
                date: '',
                user: {},
                payload: [
                    {
                        type: 'image',
                        payload: {


                        },
                {
                        type: 'paragraphe',
                        payload: creatorPara({ content: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:    " })
                    }
                ]
            }
        ]
    }
    export default blogData;