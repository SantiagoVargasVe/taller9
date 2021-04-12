import RegisterForm from "./JobHook"
function Form(){

    const {handleSubmit,handleInputChange} = RegisterForm()
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">name</label>
                    <input
                    type="text"
                    id= "name"
                    name="name"
                    onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="company">Company</label>
                    <input
                    type="text"
                    id= "company"
                    name="company"
                    onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="salary">salary</label>
                    <input
                    type="text"
                    id= "salary"
                    name="salary"
                    onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <input
                    type="text"
                    id= "city"
                    name="city"
                    onChange={handleInputChange}
                    />
                </div>
                <button type="submit"> Submit</button>
            </form>
        </div>
    )
}

export default Form