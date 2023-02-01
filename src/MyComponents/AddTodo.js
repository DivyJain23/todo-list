import React from 'react'

export const AddTodo = () => {
    return (
        <div className='container my-3'>
            <form>
                <h3>Add a Todo</h3>
                <div className="mb-3">
                    <label for="title" className="form-label">Todo Title</label>
                    <input type="text" className="form-control" id="title" aria-describedby="emailHelp"></input>
                </div>
                <div className="mb-3">
                    <label for="desc" className="form-label">Todo Description</label>
                    <input type="text" className="form-control" id="desc"></input>
                </div>
                <button type="submit" className="btn btn-sm btn-success">Submit</button>
            </form>
        </div>
    )
}
