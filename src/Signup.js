import React, {Component} from "react"
import axios from "axios"
import {Redirect} from "react-router-dom"

class Signup extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            email: '',
            password: '',
            comfirmPassword: '',
            redirectTo: null
        }
    }

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
    }
    
	handleSubmit(event) {
		event.preventDefault()
        // TODO - validate!
        if (this.username === ""){
            console.log("please enter username")
        }
        else if (this.password !== this.comfirmPassword){
            console.log("passwords do not match!")
        }
        else if (this.password.length < 5){
            console.log("password too short")
        }

		axios
			.post('/auth/signup', {
				username: this.state.username,
				password: this.state.password
			})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('youre good')
					this.setState({
						redirectTo: '/login'
					})
				} else {
					console.log('duplicate')
				}
			})
	}

}

export default Signup