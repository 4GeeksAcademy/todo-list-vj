import React, { useState } from "react";


const Home = () => {

	const [todoList, setTodoList] = useState([])
	const [newTodo, setNewTodo] = useState("")
	const [showX, setShowX] = useState(null)

	const handlePressKey = (e) => {
		if (e.key === "Enter") {
			setTodoList([...todoList, newTodo])
			setNewTodo("")
		}
	}

	const handleDelete = (indexToDelete) => {

		setTodoList(todoList.filter((elem, index) => index !== indexToDelete))
	}



	return (
		<div id="div">

			<div className="title">List of things to do:</div>
			<div id="contenedor-todo-list">
				<ul className="listado">
					<li>
						<input
							type="text"
							placeholder="What needs to be done?"
							value={newTodo}
							onChange={(e) => setNewTodo(e.target.value)}
							onKeyDown={handlePressKey}
						/>

					</li>
					<div>
					{
						todoList.map((todo, index) => (
							<li key={index}
								onMouseOver={() => setShowX(index)}
								onMouseLeave={() => setShowX(null)}
								

							>{todo}
								{showX === index && <small onClick={() => handleDelete(index)} id="equis"><i className="fa-solid fa-x"></i></small>}
							</li>
						))
					}
					</div>
					<li className="things">{todoList.length === 0 ? "There are no things to do, add one." : " Things to do: " + todoList.length}</li>
				</ul>
			</div>
			<div id="hoja-uno"></div>
			<div id="hoja-dos"></div>
		</div>
	);
};

export default Home;