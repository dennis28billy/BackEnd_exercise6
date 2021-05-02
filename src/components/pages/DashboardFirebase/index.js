import React, {useState, useEffect} from 'react';
import Button from "../../atom/Button";
import Input from "../../atom/Input";
import firebase from "../../../config/Firebase";

const DashboardFirebase = () => {

    const [productName, setProductName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [product, setProduct] = useState([])
    const [button, setButton] = useState("Save");
    const [selectedProduct, setSelectedProduct] = useState ({});

    useEffect(() => {
        firebase.database()
        .ref("products")
        .on('value', (res) => {
            if(res.val()){
                //ubah menjadi array
                const rawData = res.val();
                const productArr = [];
                Object.keys(rawData).map((item) =>{
                    productArr.push({
                        id: item,
                        ...rawData[item],
                    })
                });
                setProduct(productArr);
            }
        })
    }, [])

    const resetForm = () => {
        setProductName("");
        setCategory("");
        setPrice("");
        setButton("Save");
        setSelectedProduct({});
    };

    const handleSubmit = () => {
        const dataSubmit = {
            productName : productName,
            category : category,
            price : price
        };
        if(button === 'Save'){
            //insert
            firebase.database().ref('products').push(dataSubmit);
        }
        else{
            //update
            firebase.database().ref(`products/${selectedProduct.id}`).set(dataSubmit);
        }
        resetForm();
      };
    
    const onUpdateData = (item) => {
        setProductName(item.productName);
        setCategory(item.category);
        setPrice(item.price);
        setButton("Update");
        setSelectedProduct(item);
    }

    const onDeleteData = (item) => {
        //delete
        firebase.database()
        .ref(`products/${item.id}`)
        .remove();
    }

    return (
        <div>
            <div className = "container mt-5">
            <h3>Dashboard</h3>
            <Input
                className="form-control "
                label="Product Name"
                placeholder="Type the product name"
                value={productName}
                onChange={(event) => setProductName(event.target.value)}
            />
            <Input
                className="form-control"
                label="Category"
                placeholder="Type the category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
            />
            <Input
                className="form-control"
                label="Price"
                placeholder="Type the price"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
            />
            <br />
            <Button onClick={handleSubmit} text={button} className="btn btn-success form-control"/>
            {
                button === 'Update' && <Button onClick={resetForm} text="Cancel Update" className="btn btn-secondary form-control "/>
            }
        </div>
        <hr />
        <table class="table table-striped table-hover container mt-4">
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    product.map(item => (
                        <tr key={item.id}>
                            <td>{item.productName}</td>
                            <td>{item.category}</td>
                            <td>{item.price}</td>
                            <td>
                                <button className = "btn btn-success" onClick={() => onUpdateData(item)}>Update</button>
                                <button className = "btn btn-danger" onClick={() => onDeleteData(item)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </div>
        
        

    );
};

export default DashboardFirebase;