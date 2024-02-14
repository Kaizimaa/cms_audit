const updateAdm = () => {
    return (
        <div>
        <button className="btn btn-info btn-sm" >
          Edit
        </button>
  
        <input
          type="checkbox"
        //   checked={modal}
        //   onChange={handleChange}
          className="modal-toggle"
        />
  
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Edit </h3>
            <form >
              <div className="form-control">
                <label className="label font-bold">Title</label>
                <input
                  type="text"
                //   value={title}
                //   onChange={(e) => setTitle(e.target.value)}
                  className="input w-full input-bordered"
                  placeholder="Product Name"
                />
              </div>
              <div className="form-control">
                <label className="label font-bold">Price</label>
                <input
                  type="text"
                //   value={price}
                //   onChange={(e) => setPrice(Number(e.target.value))}
                  className="input w-full input-bordered"
                  placeholder="Price"
                />
              </div>
              <div className="modal-action">
                <button type="button" className="btn" >
                  Close
                </button>
                {/* {!isMutating ? (
                  <button type="submit" className="btn btn-primary">
                    Update
                  </button>
                ) : (
                  <button type="button" className="btn loading">
                    Updating...
                  </button>
                )} */}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}
export default updateAdm;