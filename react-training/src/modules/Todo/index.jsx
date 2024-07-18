import React from "react";

const Todo = () => {
  // {
  //   title: "test task"
  //   isCompleted: false
  // }

  // useState
  // const listOfTasks = []
  // let currentTask = "Go Outside"

  // helps manage data state (displayec)
  const [listOfTasks, setListOfTasks] = React.useState([]);
  const [completedTasks, setCompletedTasks] = React.useState([]);
  const [currentTask, setCurrentTask] = React.useState("Go Outside");
  const [minuteCount, setMinuteCount] = React.useState(new Date().getMinutes());

  // let minuteCount = new Date().getMinutes();

  const incrementMinuteCount = () => {
    console.log("minute count in function ", minuteCount);
    // minuteCount = minuteCount + 1;
    setMinuteCount((currentMinuteCount) => currentMinuteCount + 1);
  };

  // run code when specified variables change or when page loads
  React.useEffect(() => {
    if (completedTasks.length <= 0) return;

    console.log("Completed Tasks Updated");
  }, [completedTasks.length]);

  // useMemo
  // run code when specified variables change or when page loads and return a value
  // assign the value to a variable
  const completedTasksStrLen = React.useMemo(() => {
    if (completedTasks.length <= 0) return 0;

    console.log("the use memo is run!!");
    const totalStringLen = completedTasks.reduce((prev, task) => {
      return prev + task.title.length;
    }, 0);
    return totalStringLen;
  }, [completedTasks.length]);

  // useCallback
  const getPendingCompletedRatio = React.useCallback(
    (displayAsPercentage = false) => {
      console.log("use call back is run");
      let ratio = listOfTasks.length / completedTasks.length;
      if (displayAsPercentage) {
        ratio = ratio * 100;
      }
      console.log({ ratio });
      return ratio;
    },
    []
  );

  const handleTaskCompletion = (task) => {
    const updatedList = listOfTasks.filter((iTask) => {
      if (iTask.title === task.title) {
        return false;
      }
      return true;
    });
    setListOfTasks(updatedList);
    setCompletedTasks([...completedTasks, task]);
  };

  const handleTaskUnCompletion = (task) => {
    const updatedCompletedList = completedTasks.filter((iTask) => {
      if (iTask.title === task.title) {
        return false;
      }
      return true;
    });
    setListOfTasks([...listOfTasks, task]);
    setCompletedTasks(updatedCompletedList);
  };

  console.log({ minuteCount, completedTasksStrLen });
  return (
    <div className="min-h-screen p-3">
      <h3 className="text-3xl font-bold underline">TODO</h3>
      {/* {<span>Task Completed!</span>} */}
      <h4>Pending</h4>
      <ul>
        {listOfTasks.map((task, index) => {
          return (
            <li key={index}>
              <input
                key={task.title}
                type="checkbox"
                name=""
                id=""
                onClick={(e) => handleTaskCompletion(task)}
                checked={false}
              />
              <span>{task.title}</span>

              <button
                onClick={() => {
                  // console.log({index})
                  // const updatedList = listOfTasks.splice(index, 1);
                  // console.log({updatedList})

                  const updatedList = listOfTasks.filter((iTask) => {
                    console.log({ "delete comparison": task !== iTask });
                    if (task !== iTask) {
                      return true;
                    }
                    return false;
                  });
                  setListOfTasks(updatedList);
                }}
              >
                Delete Task
              </button>
            </li>
          );
        })}
      </ul>

      <h4>Completed</h4>
      <ul>
        {completedTasks.map((task, index) => {
          return (
            <li key={index}>
              <input
                key={task.title}
                type="checkbox"
                name=""
                id=""
                onClick={(e) => handleTaskUnCompletion(task)}
                checked={true}
              />
              <s>
                <span
                  style={{
                    color: "grey",
                  }}
                >
                  {task.title}
                </span>
              </s>

              <button
                className="border rounded-md bg-slate-800 text-white ml-4 px-4 py-2"
                onClick={() => {
                  // console.log({index})
                  // const updatedList = listOfTasks.splice(index, 1);
                  // console.log({updatedList})

                  const updatedList = completedTasks.filter((iTask) => {
                    console.log({ "delete comparison": task !== iTask });
                    if (task !== iTask) {
                      return true;
                    }
                    return false;
                  });
                  setCompletedTasks(updatedList);
                }}
              >
                Delete Task
              </button>
            </li>
          );
        })}
      </ul>

      <br />
      <br />
      <h5>Add Todo Item</h5>
      <input
        type="text"
        className="border border-cyan-700 rounded-md mr-3"
        value={currentTask}
        onChange={(event) => {
          const updatedValue = event.target.value;
          setCurrentTask(updatedValue);
        }}
      />
      <button
        className="bg-green-600 px-4 py-2 rounded-md text-yellow-50"
        type="submit"
        onClick={() => {
          setListOfTasks([
            ...listOfTasks,
            { title: currentTask, isCompleted: false },
          ]);
          setCurrentTask("");
        }}
      >
        Add Task
      </button>

      <div className="">
        <p>Minute Count: {minuteCount}</p>
        <button onClick={incrementMinuteCount}>Add Minute Count</button>
      </div>

      <div className="">
        <button onClick={() => getPendingCompletedRatio(true)}>
          Get Tasks Ratio
        </button>
      </div>
    </div>
  );
};

export default Todo;
