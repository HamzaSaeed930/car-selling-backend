const CarForm = require('../models/carModel');

const createCarForm = async (req, res) => {
    try {
        const { carModel, city, phone, price } = req.body;

        const images = req.files.map((file) => file.path);

        if (!images || !carModel || !city || !phone || !price) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const carForm = new CarForm({
            images,
            carModel,
            city,
            phone,
            price,
        });

        await carForm.save();

        return res.status(201).json({
            message: 'Car form created successfully',
            data: carForm,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = {
    createCarForm,
};
