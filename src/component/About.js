import React, { useState } from 'react'

export default function About(props) {

    const [style, setStyle] = useState({
        color: 'black',
        backgroundColor: 'white',
        border: "1px solid black"
        
    })

    const [btntext, setbtnText] = useState("Dark Mode")
    const myStyle = {
        color: "white",
        backgroundColor: "black",
        border: "1px solid white"
    }
    const [isDark, setIsDark] = useState("btn-dark");
    const toggleMode=()=>{
        if(style.color === 'black'){
            setStyle({color: "white",
            backgroundColor: "black",
            border: "1px solid white"})
            setbtnText("Normal Mode")
            setIsDark("btn-light")    
        }
        else{
            setStyle({color: "black",
            backgroundColor: "white",
            border: "1px solid black"})
            setbtnText("Dark Mode")
            setIsDark("btn-dark")    
        }    
    }
    return (
        <div className={`container p-3 text-${props.mode==="dark"?"info":"secondary"} `}>
            <div id="accordion">
                <div className="card m-2" style={style}>
                    <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                            <button
                                className="btn btn-link"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                Collapsible Group Item #1
                            </button>
                        </h5>
                    </div>
                    <div
                        id="collapseOne"
                        className="collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordion"
                    >
                        <div className="card-body text-info">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                            moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                            shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                            proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                            aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                </div>
                <div className="card  m-2" style={style}>
                    <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                            <button
                                className="btn btn-link collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                Collapsible Group Item #2
                            </button>
                        </h5>
                    </div>
                    <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordion"
                    >
                        <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                            moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                            shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                            proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                            aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                </div>
                <div className="card  m-2" style={style}>
                    <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                            <button
                                className="btn btn-link collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >
                                Collapsible Group Item #3
                            </button>
                        </h5>
                    </div>
                    <div
                        id="collapseThree"
                        className="collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordion"
                    >
                        <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                            moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                            shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                            proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                            aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                </div>
            </div>
            <button className={`btn ${isDark} mx-2` } onClick={toggleMode}>{btntext}</button>
        </div>
    )
}
