
class Item {
    constructor(_id,
        name, 
        price, 
        company, 
        image, 
        quantity, 
        description, 
        type,
        updatedAt,
        userAdded,
        createdAt,
        dosage,
        expDate,
        healthFacilities
    ) {
        this._id = _id;
        this.name = name;
        this.price = price;
        this.company = company;
        this.image = image;
        this.quantity = quantity;
        this.description = description;
        this.type = type;
        this.createAt=createdAt;
        this.updatedAt=updatedAt;
        this.user_added=userAdded;
        this.healthFacilities=healthFacilities;
        this.dosage=dosage;
        this.exp_date=expDate


    }
}
export default Item;