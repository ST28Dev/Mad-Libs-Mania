import { useEffect } from "react"
const Info = ()=>{
    let twitterLogo, youTubeLogo, gitHubLogo
    const info_details={
        "About":"<p class=\"font-lato\">Welcome to Mad Libs Mania, a page for satisfying your Mad Libs urges. The game of Mad Libs involves providing certain requested words which will then be inserted into the designated prompt to form a new scenario/story. </p><p class=\"font-lato\">To get started, upon accessing this page, a prompt has already been generated for you, though you can't see it yet 😉. There are also preset inputs for you to enter, and if you have any questions about the types of inputs needed, hopefully the \"Key\" section will clear it up for you.</p><p class=\"font-lato\">You can hit the \"Generate New Prompt\" button anytime to get another prompt with another set of required inputs, but I recommend doing so after you give the current prompt a try.</p><p class=\"font-lato\">Now there is one pivotal rule to keep in mind, and it is the most essential rule I think when you give these activities a try: have fun and enjoy yourself! Come up with great/hilarious combinations for each prompt; you are only limited by your creativity (and maybe some constraints here and there)! 😁 With all that being said, go wild!</p><div class=\"text-end\"><p class=\"fst-italic\">Dance as bright as the moonlight, run as free as the murmuring gusts of wind.</p><figcaption class=\"blockquote-footer me-3\">T.S.</figcaption></div>",
        "Key":"<p class=\"font-lato\">This section will catalog some of the inputs requested by the game. It will hopefully simplify/introduce what each term requests for input.</p><h4 class=\"font-ubuntu\"><u>Suffixes</u></h4><p class=\"font-lato\"> Suffixes will primarily be used to signify whether a noun, or verb should be singular/plural, or present/past tense/ending with ing respectively. For nouns, if no suffix is specified, assume that both singular/plural forms are possible.</p><dl class=\"row ms-3\"> <dt class=\"col-4 font-ubuntu\">Plural</dt> <dd class=\"col-8 font-lato\">Requests a noun that ends with s or es if necessary. Multiple of an item.</dd> <dt class=\"col-4 font-ubuntu\">Singular</dt> <dd class=\"col-8 font-lato\">Requests a single noun.</dd> <dt class=\"col-4 font-ubuntu\">Present</dt> <dd class=\"col-8 font-lato\">An action you are doing now. </dd> <dt class=\"col-4 font-ubuntu\">Past</dt> <dd class=\"col-8 font-lato\">An action you did already.</dd></dl><h4 class=\"font-ubuntu\"><u>Class of Words</u></h4><p class=\"font-lato\"> Prompts will request a variety of types of words, ranging from nouns to verbs. They are pretty elementary, but, just for reference, here is a list of possible requests from prompts:</p><dl class=\"row ms-3\"> <dt class=\"col-4 font-ubuntu\">Noun</dt> <dd class=\"col-8 font-lato\">A thing, instance, item, or person</dd> <dt class=\"col-4 font-ubuntu\">Adjective</dt> <dd class=\"col-8 font-lato\">Something that describes a noun (e.g. big, small, nice)</dd> <dt class=\"col-4 font-ubuntu\">Verb</dt> <dd class=\"col-8 font-lato\">An action done by a noun (e.g. kick, punch, love)</dd> <dt class=\"col-4 font-ubuntu\">Color</dt> <dd class=\"col-8 font-lato\">A bright, wonderful thing that we are privileged enough to witness 😉(e.g. red, blue,  green)</dd> <dt class=\"col-4 font-ubuntu\">Name</dt> <dd class=\"col-8 font-lato\">A label to distinguish living things from one another</dd> <dt class=\"col-4 font-ubuntu\">Slogan</dt> <dd class=\"col-8 font-lato\">A saying/statement worthy of shouting out (e.g. HERE'S JOHNNY (from <u>The Shining</u>  [no copyright intended 🙂]))</dd></dl>",
        "Credits":"<div class= \"mb-3 \"> <h4>Prompts retrieved from: </h4> <ul class= \"list-group credit-list\">  <li class= \"list-group-item list-group-item-primary \"><a href= \"https://randomwordgenerator.com/paragraph.php \" class= \"fst-none credit-link\" target= \"_blank \">RandomWordGenerator.com</a></li>  <li class= \"list-group-item list-group-item-primary \"><a href= \"https://randomword.com/paragraph \" class= \"fst-none credit-link\" target= \"_blank \">RandomWord.com</a></li> </ul></div><div> <h4>Technologies used: </h4> <dl class= \"row \">  <dt class= \"col-4 col-sm-3\">React.js</dt>  <dd class= \"col-8 col-sm-9 \">for overall layout and structuring components</dd>  <dt class= \"col-4 col-sm-3\">JavaScript</dt>  <dd class= \"col-8 col-sm-9\">for adding general functionality to components (e.g. toggling buttons, and formatting user inputs/prompts appropriately)</dd>    <dt class= \"col-4 col-sm-3 \">JSON</dt>  <dd class= \"col-8 col-sm-9 \">for storing prompt data, (i.e. the prompt itself + its respective title)</dd> </dl></div>",
        "Contact":"<div> <h4>Email: </h4><span>ts28dev@gmail.com</span> </div> <div class= \"d-flex flex-row mt-3\"> <h4 class=\"me-3 mt-2\">Links: </h4> <a class=\"link\" href= \"https://twitter.com/TS_Dev_28 \" target=\"_blank\"><img width=\"50\" height=\"50\" class=\"logo-link me-1\"id= \"twitter_logo\" alt= \"twitter_logo \"></a><a class=\"link\" target=\"_blank\" href=\"https://www.youtube.com/@TS_DEV\"><img class=\"me-1 logo-link\"id=\"youtube_logo\" width=\"50\" height=\"50\" alt=\"youtube_logo\"></a><a target=\"_blank\"  class=\"me-1 link\" href=\"https://github.com/ST28Dev\"><img width=\"50\" height=\"50\" class=\"logo-link\" id=\"github_logo\" alt=\"github_logo\"></a></div>"
    }
    useEffect(()=>{
        document.querySelector("#info_desc").innerHTML = info_details.About
    },[])

    useEffect(() => {
        fetch("./twitter-logo.png", {
          headers: {
            Accept: "image/png",
            "Content-Type": "image/png",
          },
        })
          .then((res) => res.blob())
          .then(
            (result) => {
              let img = URL.createObjectURL(result)
              twitterLogo = img
            },
            (error) => {
              console.log(error)
            }
          );
        
          fetch("./youtube-logo.png",{
            headers:{
                Accept: "image/png",
                "Content-Type":"image/png"
            }
          }).then((res) => res.blob())
          .then(
            (result) => {
              let img = URL.createObjectURL(result)
              youTubeLogo = img
            },
            (error) => {
              console.log(error)
            }
          );

          fetch("./github-logo.png",{
            headers:{
                Accept: "image/png",
                "Content-Type":"image/png"
            }
          }).then((res) => res.blob())
          .then(
            (result) => {
              let img = URL.createObjectURL(result)
              gitHubLogo = img
            },
            (error) => {
              console.log(error)
            }
          );
      }, []);

      
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
                document.querySelector("#twitter_logo").setAttribute("src",twitterLogo)
                document.querySelector("#youtube_logo").setAttribute("src",youTubeLogo)  
                document.querySelector("#github_logo").setAttribute("src",gitHubLogo) 
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
                <h3 id="info_heading" className="mb-3">About</h3>
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