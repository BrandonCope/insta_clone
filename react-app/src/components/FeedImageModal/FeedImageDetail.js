import EditDeleteModal from '../EditDeleteModal'
import FollowUnfollowModal from '../FollowUnfollowModal';
import './FeedImageDetail.css'
import { useImageDetailModal } from "./index";




const FeedImageDetail = ({image}) => {
    const {setShowModal} = useImageDetailModal()

    // console.log(image);

    return (
        <div className="image-detail-component-page">
            <div>
                <img className="image-detail-image" src={image.image}/>
            </div>
            <div className="image-detail-content">
                <div className="user-div">
                    <p> {image.username} </p>
                    {/* <button>...</button> */}
                    <FollowUnfollowModal image={image}/>
                    {/* FOLLOW/UNFOLLOW MODAL */}
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

export default FeedImageDetail;
