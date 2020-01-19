import React, { useState, useEffect } from "react";
import Loading from "../components/Loading/index";
import API from "../utils/API";




function PreviewSite() {
    const [isLoading, setIsLoading] = useState(true);
    const [sharedSite, setSharedSite] = useState({})


    useEffect(() => {
        API.getSharedSite()
        .then(res => {
            setSharedSite(res.data);
            setIsLoading(false)
        })
        .catch(err => console.log(err))
    })


    if (isLoading) {
        return <Loading />
    }

    return (
        <div>preview site goes here</div>
        // Include at the bottom of the preview: *data source: ridb.recreation.gov




    )
}

export default PreviewSite;