const deleteAdm = () => {
    return (
       <div>
<button className="btn btn-error btn-sm">
  Delete
</button>

<input
  type="checkbox"
//   checked={modal}
//   onChange={handleChange}
  className="modal-toggle"
/>

<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">
      Are sure to delete  ?
    </h3>
    <div className="modal-action">
      <button type="button" className="btn" >
        Close
      </button>
      {/* {!isMutating ? (
        <button
          type="button"
        //   onClick={() => handleDelete(product.id)}
          className="btn btn-primary"
        >
          Delete
        </button>
      ) : (
        <button type="button" className="btn loading">
          Deleting...
        </button>
      )} */}
    </div>
  </div>
</div>
</div> 
    )
}
export default deleteAdm;
