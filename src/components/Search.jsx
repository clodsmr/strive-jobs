import React from "react"
import JobsList from "./JobsList"


class Search extends React.Component {

    state = {

       jobs: [],
        
    }



    fetchJobs = async () => {


        let url = `https://strive-jobs-api.herokuapp.com/jobs?search=${this.props.query}&limit=10`
        try {

            const response = await fetch(url)

            const data = await response.json()
            // console.log(data)
            console.log("right after the fetch")

            if (response.ok) {

                this.setState({
                   jobs: data.data
                })
                console.log(this.state.jobs)

            } else {

                console.log("inside the else of Fetch")

            }

        } catch (e) {
            console.log(e)
            console.log("outside the try block")

        }
    }



    componentDidMount = async () => {
        this.fetchJobs()

    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.query !== this.props.query) {
            this.fetchJobs()
        }
    }

    render() {
        return (
            <>
            <div>
               <JobsList jobs={this.state.jobs} />
            </div>
            </>
        ) 
    }
}

    export default Search
