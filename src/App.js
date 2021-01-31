import React, { useState } from "react";
import "./styles.css";
import pic from "./potato.jfif";
import 'bootstrap/dist/css/bootstrap.min.css';

function changeLike()
{
  let like=document.getElementById("like");
  let dislike=document.getElementById("unlike");
  if(like.getAttribute("hidden"))
  {
    dislike.setAttribute("hidden",true);
    like.removeAttribute("hidden")
  }
  else
  {
    dislike.removeAttribute("hidden");
    like.setAttribute("hidden",true);
  }
}


export default function App() {

  const [buttonText, setButtonText] = useState("+");
  const [buttonText1, setButtonText1] = useState("+");
  const [buttonText2, setButtonText2] = useState("+");
  const [buttonText3, setButtonText3] = useState("+");
  const [buttonText4, setButtonText4] = useState("+");
  const [buttonText5, setButtonText5] = useState("+");
  const [buttonText6, setButtonText6] = useState("+");

  const changeText = (text) => setButtonText(text);
  const changeText1 = (text) => setButtonText1(text);
  const changeText2 = (text) => setButtonText2(text);
  const changeText3 = (text) => setButtonText3(text);
  const changeText4 = (text) => setButtonText4(text);
  const changeText5 = (text) => setButtonText5(text);
  const changeText6 = (text) => setButtonText6(text);


  const [font,changeFontSize] =useState("15");
  const [hiddenValue,changeHiddenValue] =useState(true);
  return (
    <div className="App container">
      <div className="img"><img src={pic} alt="CajunPotato"/> </div>     
      <div className="header row">
        <h5 className="col-6">cajun potato recipe</h5>
        <span className="fr66n col-6">
          <button className="wpO6b " type="button" onClick={changeLike}>
            <div className="QBdPU ">
              <span className="FY9nT">
              <svg id="like" aria-label="Like" className="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24">
                <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
              </svg>
              <svg id="unlike" hidden={true} aria-label="Unlike" className="_8-yf5 " fill="#ed4956" height="24" viewBox="0 0 48 48" width="24">
                <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
              </svg>
            </span>
            </div>
          </button>
        </span>
      </div>
      <div className="duration container">30 MINUTES</div>
      <div className="measureSection row">
        <div className="calories col-4" >
          <img src="https://icon-library.net//images/calories-icon/calories-icon-0.jpg" height="50px"></img><br/>
          <p>120 Calories</p>
        </div>
        
        <div className="servings col-4" >
          <img src="https://image.shutterstock.com/z/stock-vector-the-best-cloche-icon-vector-illustration-logo-template-in-trendy-style-suitable-for-many-purposes-1504091174.jpg" height="50px"></img><br/>
          <p>3 Servings</p>
        </div>

        <div className="unitchart col-4" >
          <img src="https://icons.iconarchive.com/icons/iconsmind/outline/512/Line-Chart-icon.png" height="50px"></img><br/>
          <p>Unit Chart</p>
        </div>
      </div>
      <div className="ingredients container">
        <div className=" Ingredientheader row">
          <div className="col-8 ingredientsreq">
            <img src="https://img.icons8.com/wired/64/000000/add-list.png" height="50px"></img>
            <span className="ingred">Ingredients Required</span>
          </div>
          <div className="col-4 count">
            <h6>7 Count</h6>
          </div>
        </div>
        <ul className="IngredientContent">
            <li>
              <button className="ingButton" onClick={() => changeText(buttonText=="✓"?"+":"✓")}>{buttonText}</button>
              <span>  15 baby potato</span>
            </li><br/>
            <li>
              <button className="ingButton"  onClick={() => changeText1(buttonText1=="✓"?"+":"✓")}>{buttonText1}</button>
              <span>  ¼ cup corn flour</span>
            </li><br/>
            <li>
              <button className="ingButton" onClick={() => changeText2(buttonText2=="✓"?"+":"✓")}>{buttonText2}</button>
              <span>  ½ tsp chilli flakes</span>
            </li><br/>
            <li>
              <button className="ingButton" onClick={() => changeText3(buttonText3=="✓"?"+":"✓")}>{buttonText3}</button>
              <span> ¾ cup mayonnaise</span>
            </li><br/>
            <li>
              <button className="ingButton" onClick={() => changeText4(buttonText4=="✓"?"+":"✓")}>{buttonText4}</button>
              <span> ½ tsp onion powder</span>
            </li><br/>
            <li>
              <button className="ingButton" onClick={() => changeText5(buttonText5=="✓"?"+":"✓")}>{buttonText5}</button>
              <span> 1 tsp chilli sauce</span>
            </li><br/>
            <li>
              <button className="ingButton" onClick={() => changeText6(buttonText6=="✓"?"+":"✓")}>{buttonText6}</button>
              <span>  3 tbsp milk</span>
            </li><br/>
        </ul>
      </div>
      <div className="directionToPreparemain container">
        <div className="row directionHeader">
          <div className="col-8 direction">
            <img src="https://img.icons8.com/flat_round/64/000000/sorting-arrows-horizontal.png" height="50px"/>
            <span className="ingred">Directions to prepare</span>
          </div>
          <button className="col-4 fontsize" onClick={()=>changeHiddenValue({hiddenValue}?false:true)}>
            <img src=" https://cdn4.iconfinder.com/data/icons/devine_icons/Black/PNG/File%20Types/Font.png" height="50px"/>         
            <h6>Font Size</h6>
          </button>
        </div>
        <ul className="directioncontent" id="directioncontent" style={{'fontSize': font+'px'}}>
          <li>Take 15 baby potato and add ½ tsp salt.</li>
          <li>Pressure cook for 2 whistles or until potatoes is 90% cooked.</li>
          <li>Remove the potatoes, press and flatten slightly. keep aside.</li>
          <li> In a small bowl take ¼ cup corn flour, ¼ cup maida, ½ tsp chilli flakes, ½ tsp mixed herbs, ¼ tsp white pepper powder and ½ tsp salt.</li>
          <li>Add ½ cup water and mix well forming a smooth lump-free batter.</li>
          <li>Now dip the boiled potato into slurry coating uniformly.</li>
          <li>Shallow fry the potatoes on medium flame.</li>
          <li>Fry both the sides until the potatoes turn golden brown and crisp.</li>
          <li>Add ½ tsp butter and fry to have a buttery flavour. keep aside.</li>
          <li>Now in a small bowl take ¾ cup mayonnaise, ½ tsp chilli flakes and ½ tsp mixed herbs.</li>
          <li>Also add ¼ tsp white pepper powder, ½ tsp garlic powder, ½ tsp paprika, ½ tsp onion powder, ½ tsp salt and 1 tsp chilli sauce.</li>
          <li>Mmix well forming a smooth paste.</li>
          <li>Now add 3 tbsp milk or as required and prepare a smooth flowing consistency sauce.</li>
          <li>To serve, in a plate place fried potato leaving some gap in between.</li>
          <li>Pour a generous amount of cajun sauce over it.</li>
          <li>Sprinkle, paprika, 1 tsp onion and 1 tsp coriander.</li>
          <li>Finally, cajun potato is ready to enjoy.</li>
        </ul>
      </div>
      <div id="slider" className="slidespan" hidden={hiddenValue}>
        <input className="slider" type="range" name="volume"min="0" max="30" onChange={(event)=>changeFontSize(event.target.value)} value={font}></input>
        <span id="fontsize">{font}</span>
      </div>
    </div>
  );
}
