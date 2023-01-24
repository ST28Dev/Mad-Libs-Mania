import { useEffect, useState } from "react"
const Info = ()=>{

    const info_details={
        "About":"<p>Welcome to Mad Libs Mania, a page for satisfying your Mad Libs urges. The game of Mad Libs involves providing certain requested words which will then be inserted into the designated prompt to form a new scenario/story. </p><p>To get started, upon accessing this page, a prompt has already been generated for you, though you can't see it yet 😉. There are also preset inputs for you to enter, and if you have any questions about the types of inputs needed, hopefully the \"Key\" section will clear it up for you.</p><p>You can hit the \"Generate New Prompt\" button anytime to get another prompt with another set of required inputs, but I recommend doing so after you give the current prompt a try.</p><p>Now there is one pivotal rule to keep in mind, and it is the most essential rule I think when you give these activities a try: have fun and enjoy yourself! Come up with great/hilarious combinations for each prompt; you are only limited by your creativity (and maybe some constraints here and there)! 😁 With all that being said, go wild!</p><div class=\"text-end\"><p class=\"fst-italic\">Dance as bright as the moonlight, run as free as the murmuring gusts of wind.</p><figcaption class=\"blockquote-footer me-3\">T.S.</figcaption></div>",
        "Key":"<p>This section will catalog some of the inputs requested by the game. It will hopefully simplify/introduce what each term requests for input.</p><h4><u>Suffixes</u></h4><p> Suffixes will primarily be used to signify whether a noun, or verb should be singular/plural, or present/past tense/ending with ing respectively. For nouns, if no suffix is specified, assume that both singular/plural forms are possible.</p><dl class=\"row ms-3\"> <dt class=\"col-4\">Plural</dt> <dd class=\"col-8\">Requests a noun that ends with s or es if necessary. Multiple of an item.</dd> <dt class=\"col-4\">Singular</dt> <dd class=\"col-8\">Requests a single noun.</dd></dl><h4><u>Class of Words</u></h4><p> Prompts will request a variety of types of words, ranging from nouns to verbs. They are pretty elementary, but, just for reference, here is a list of possible requests from prompts:</p><dl class=\"row ms-3\"> <dt class=\"col-4\">Noun</dt> <dd class=\"col-8\">A thing, instance, item, or person</dd> <dt class=\"col-4\">Adjective</dt> <dd class=\"col-8\">Something that describes a noun (e.g. big, small, nice)</dd> <dt class=\"col-4\">Verb</dt> <dd class=\"col-8\">An action done by a noun (e.g. kick, punch, love)</dd> <dt class=\"col-4\">Color</dt> <dd class=\"col-8\">A bright, wonderful thing that we are privileged enough to witness 😉(e.g. red, blue, green)</dd> <dt class=\"col-4\">Name</dt> <dd class=\"col-8\">A label to distinguish living things from one another</dd> <dt class=\"col-4\">Slogan</dt> <dd class=\"col-8\">A saying/statement worthy of shouting out (e.g. HERE'S JOHNNY (from <u>The Shining</u> [no copyright intended 🙂]))</dd></dl>",
        "Credits":"<div class= \"mb-3 \"> <h4>Prompts retrieved from: </h4> <ul class= \"list-group credit-list\">  <li class= \"list-group-item list-group-item-primary \"><a href= \"https://randomwordgenerator.com/paragraph.php \" class= \"fst-none credit-link\" target= \"_blank \">RandomWordGenerator.com</a></li>  <li class= \"list-group-item list-group-item-primary \"><a href= \"https://randomword.com/paragraph \" class= \"fst-none credit-link\" target= \"_blank \">RandomWord.com</a></li> </ul></div><div> <h4>Technologies used: </h4> <dl class= \"row \">  <dt class= \"col-3 \">React.js</dt>  <dd class= \"col-9 \">for overall layout and structuring components</dd>  <dt class= \"col-3 \">JavaScript</dt>  <dd class= \"col-9 \">for adding general functionality to components (e.g. toggling buttons, and formatting user inputs/prompts appropriately)</dd>    <dt class= \"col-3 \">JSON</dt>  <dd class= \"col-9 \">for storing prompt data, (i.e. the prompt itself + its respective title)</dd> </dl></div>",
        "Contact":"This is the contact section."
    }
    useEffect(()=>{
        document.querySelector("#info_desc").innerHTML = info_details.About
    },[])

    
    
    const toggle = (e) =>{
        const curr_active=document.querySelectorAll("#button-group-container button.active").item(0)
        
        curr_active.classList.remove("active")

        e.target.classList.add("active")

        const tab_value = e.target.innerText

        document.querySelector("#info_heading").innerText = tab_value
        switch(tab_value){
            case "Credits":
                document.querySelector("#info_desc").innerHTML = info_details.Credits
                break;
            case "Contact":
                document.querySelector("#info_desc").innerHTML = info_details.Contact
                break;
            case "Key":
                document.querySelector("#info_desc").innerHTML = info_details.Key
                break;
            default:
                document.querySelector("#info_desc").innerHTML = info_details.About 
                break;
        }
    }
    return (
        <div className="m-3 bg-info p-3">
            <div className="mb-4">
                <h3 id="info_heading">About</h3>
                <div className="h5 fw-normal" id="info_desc"></div>
            </div>
            <div className="btn-group d-flex justify-content-md-end justify-content-center" id="button-group-container">
                <div>
                    <button onClick={toggle} className="btn btn-dark active">About</button>
                </div>
                <div>
                    <button onClick={toggle} className="btn btn-dark">Key</button>
                </div>
                <div>
                    <button onClick={toggle} className="btn btn-dark">Credits</button>
                </div>
                <div>
                    <button onClick={toggle} className="btn btn-dark">Contact</button>
                </div>  
                
            </div>
        </div>
    )
}
export default Info