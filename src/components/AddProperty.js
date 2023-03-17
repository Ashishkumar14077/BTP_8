import React from "react";

function AddProperty({ account, setAccount }) {
  return (
    <div>
      <h1>Add new Property</h1>
      <form>
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Bed
          <input type="number" name="bed" />
        </label>
        <label>
          Bath
          <input type="number" name="bath" />
        </label>
        <label>
          acreLot
          <input type="number" name="acreLot" />
        </label>
        <label>
          housesize
          <input type="number" name="housesize" />
        </label>
        <label>
          street
          <input type="text" name="street" />
        </label>
        <label>
          city
          <input type="text" name="city" />
        </label>
        <label>
          state
          <input type="text" name="state" />
        </label>
        <label>
          Price
          <input type="number" name="Price" />
        </label>
        <label>
          Upload image of the Property
          <input type="file" name="image" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddProperty;
