import React, { useState } from "react"
import { useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom"
// import ImageDetail from "../ImageDetailModal/ImageDetail"
import FeedImageModal from "../FeedImageModal"
import './PublicFeed.css'

const FollowFeed = () => {

    const user = useSelector((state) => state.session.user)
    const images = useSelector((state) => state.images)
    const follows = useSelector((state) => state.follows.following)
    const followsId = Object.keys(follows)

    const set = new Set()
    followsId.forEach(follow => {
        if(!set.has(follow)) {
            set.add(follow)
        }
    })

    // console.log(followsId)

    const imagesArr = Object.values(images).reverse()
    const filterImagesArr = imagesArr.filter((image) =>
        set.has(JSON.stringify(image.user_id))
    )
    // console.log('!!!!!!!!',set)

    return (
        <div>
            {filterImagesArr?.map((image) => (
                <div className="feed-container">
                    <Link to={`/profiles/${image.user_id}`}>
                        {image.username}
                    </Link>
                    <img className="feed-images" src={image.image}>
                    </img>
                    <FeedImageModal image={image}/>
                </div>
            ))}
        </div>
    )
}

export default FollowFeed
