
const initialData = {
    tasks: {
    1: {
        id: "1",
        title: "task 1",
        description: "task 1"
    },
      2: {
          id: "2",
        title: "task 2",
        description: "task 2"
    },
         3: {
             id: "3",
        title: "task 3",
        description: "task 3"
    },
         4: {
             id: "4",
        title: "task 4",
        description: "task 4"
    }
},
columns: {
   "col1": {
        name: "1block",
        id: 'col1',
        taskIds: [1, 2]
    },
      "col2": {
        name: "2block",
        id: 'col2',
        taskIds: [3, 4]
    }
},
columnIds: ["col1", "col2"]
}
 export default initialData;