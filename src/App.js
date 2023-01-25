import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [newPromptGen,setGen] = useState(false)

  useEffect(() => {
    document.title = "Mad Libs";
  }, []);

  useEffect(() => {
    fetch("./prompts.json", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setLoaded(true);
          setItems(result);
        },
        (error) => {
          setLoaded(true);
          setError(error);
        }
      );
  }, []);
  
  if (error) {
    return (
      <div>
        <h1>Error occurred</h1>
      </div>
    );
  } else if (!isLoaded) {
    return <div>Loading content...</div>;
  } else {
    let title
    function generate_prompt() {
      const index = Math.floor(Math.random() * items.length);

      title = items[index].title
      return items[index].prompt;
    }

    let prompt = generate_prompt();
    let currentPrompt = prompt
    const matches = prompt.match(/\$[A-Z ]+\$/g);

    const processed_matches = matches.map((item) => {
      return item.charAt(1) + item.slice(2, item.length - 1).toLowerCase();
    });

    const fillChoices = () => {
      const inputs = document.querySelectorAll("input");

      let arr = [];
      for (let i = 0; i < inputs.length; i++) {
        const curr = inputs.item(i);

        arr.push(curr.value);
      }

      processed_matches.forEach((element, index) => {
        const upperElem = element.toUpperCase().split(" ").join(" ").trim();
        const exp = new RegExp("\\$" + upperElem + "\\$");

        prompt = prompt.replace(exp, arr[index].toUpperCase());
      });
      document.querySelector("#prompt_container").hidden = false;
      document.querySelector("#prompt_display").innerText = prompt;
    };

    return (
      <div className="ms-3">
        <div>
          <h2>Prompt title: {title}</h2>
        </div>
        <div >
          {processed_matches.map((item, index) => {
            return (
              <div className="mb-2">
                <label>{item}:</label>
                <br />
                <input className="input_field" key={Math.random() * 100}></input>
              </div>
            );
          })}
          <div className="my-3">
          <button className="me-2" key={Math.random() * 100} onClick={fillChoices}>
            Submit
          </button>
          <button onClick={()=>{
            while(prompt === currentPrompt){
              prompt = generate_prompt()
            }
            currentPrompt=prompt
            document.querySelector("#prompt_container").hidden = true
            setGen(()=>{
              return !newPromptGen
            })
          }}>Generate New Prompt</button>
          </div>
        </div>
        <div id="prompt_container" hidden className="my-2 mw-100 p-2">
          <h1>Prompt:</h1>
          <p id="prompt_display"></p>
        </div>
      </div>
    );
  }
}

export default App;
