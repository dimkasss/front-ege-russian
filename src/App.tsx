import './App.css';
import Button from './Button';
import React, { useEffect, useState } from 'react';
import CSS from 'csstype';
import handleWords from './backend/words';

const App = () => {
	const [words, setWords] = useState({
		word1: "",
		word2: ""
	});
	const [key, setKey] = useState(0);
	const [answered, setAnswered] = useState(false);
	const [correct, setCorrect] = useState(false);
	const [clicked, setClicked] = useState(0);

	useEffect(() => {
		task();
		document.title = 'Трёхбалльный - ЕГЭ'
	}, [])

	
  	const task = (): void => {
		setWords({word1: "", word2: ""})
		setKey(0);
		setAnswered(false);
		setCorrect(false);
		setClicked(0);
		
  		const data = handleWords()
  	    setWords({
			word1: data.words[0],
			word2: data.words[1],
		})
		setKey(data.whichOne)
  	}

  	const pick = (n: 0 | 1) => {
  		setAnswered(true);
		setClicked(n);
  		if(key === n){
  			setCorrect(true)
  		}
  		else {
  			setCorrect(false)
  		}
  	}

  	const answeredOpacity: CSS.Properties = {
  	  opacity: answered ? 1 : 0,
  	  pointerEvents: answered ? 'all' : 'none'
  	}
  	const answeredOptions: CSS.Properties = {
  	  pointerEvents: answered ? 'none' : 'all'
  	}

  	return (
  	<div className="App">
  		<div className='cont'>
			<div className="task__name">
				Задание 4
			</div>
			<div className="task__desc">
				Выберите слово, где <b>верно</b> поставлено ударение:
			</div>
			<div className="task__cont" style={answeredOptions}>
				<Button value={words.word1} color={answered ? (clicked ? 'purple' : (correct ? 'green' : 'red')) : 'purple'} onClick={() => pick(0)}/>
				<Button value={words.word2} color={answered ? (clicked ? (correct ? 'green' : 'red') : 'purple') : 'purple'} onClick={() => pick(1)}/>
			</div>
			<div className="task__check" style={answeredOpacity}>
				<div className="task__check__clearness">
					{correct ? 'Верно!! УраУра' : (`Неверно!! Правильный вариант: ` + (key ? words.word2 : words.word1))}
				</div>
				<Button value="Продолжить" color="lightblue" onClick={() => task()}/>
			</div>
  		</div>
  	</div>
  	);
}


export default App;
