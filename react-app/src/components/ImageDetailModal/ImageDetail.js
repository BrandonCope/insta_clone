import EditDeleteModal from "../EditDeleteModal"
import './ImageDetail.css'
import { useImageDetailModal } from "./index";
import { useSelector } from 'react-redux';




const ImageDetail = ({image}) => {
    const {setShowModal} = useImageDetailModal()

    console.log(image);

    const user = useSelector(state => state.session.user)
    let sessionLinks;
    if (user?.id === image?.user_id) {
      sessionLinks = (
        <>
        <EditDeleteModal image={image} />
        </>
      )
    } else {
      sessionLinks = (
        <>
        <button>...</button>
        </>
      )

    }



    return (
        <div className="image-detail-component-page">
            <div>
                <img className="image-detail-image" src={image.image}/>
            </div>
            <div className="image-detail-content">
                <div className="user-div">
                    <p> {image.username} </p>
                    {sessionLinks}
                    {/* <EditDeleteModal image={image} /> */}
                    <button onClick={() => setShowModal(false)}>X</button>

                </div>
                <div>
                    <p>
                        {image.summary}
                    </p>
                    <div>
                    {/* <Comments /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageDetail;
