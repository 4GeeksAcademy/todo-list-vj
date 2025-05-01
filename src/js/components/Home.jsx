import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [todoList, setTodoList] = useState([])
	const [newTodo, setNewTodo] = useState("")
	const [showX, setShowX] = useState(null)

	const handlePressKey = (e) => {
		if(e.key === "Enter") {
			setTodoList([...todoList, newTodo])
			setNewTodo("")
		}
	}

	const handleDelete = (indexToDelete) => {
		
		setTodoList(todoList.filter((elem, index) => index !== indexToDelete))
	}



	return (
		<div className="text-center">
            
			<div>List of todos:</div>
			<div id="contenedor-todo-list">
				<ul>
					<li>
						<input 
						type="text" 
						placeholder="What needs to be done?" 
						value={newTodo}
						onChange={(e)=> setNewTodo(e.target.value)}
						onKeyDown={handlePressKey}
						/>
						
					</li>
					{
						todoList.map((todo, index)=>(
							<li key={index}
							onMouseOver={() => setShowX(index)}
							onMouseLeave={() => setShowX(null)}

							>{todo}
							{showX === index && <small className="mx-5" onClick={() => handleDelete(index)}>X</small>}
							</li>
						))
					}

					<li>{todoList.length === 0 ? "There are no things to do, add one." : " Things to do: " + todoList.length}</li>		
				</ul>
			</div>

		</div>
	);
};

export default Home;