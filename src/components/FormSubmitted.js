import { useHistory } from "react-router"

export default function FormSubmitted() {
    const history = useHistory();
    return (
        <div style={{
                "textAlign": "center", 
                "margin": "100px 0", 
                "height": "100%",
                "padding": "0 20px" 
            }}>
            <h2>Thank you for contacting me!</h2>
            <p>I will get back to you soon.</p>
            <button className="btn btn-primary" onClick={() => history.push("/")}>Back to Home</button>
        </div>
    )

}