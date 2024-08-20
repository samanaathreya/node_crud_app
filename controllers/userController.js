
const UserModel = require('../models/userModel');

const getUsers = async (req, res) => {
  try {
    const users = await UserModel.getUsers();
    res.json(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await UserModel.getUserById(req.params.id);
    if (!user) return res.status(404).send('User not found');
    res.json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createUser = async (req, res) => {
  try {
    const result = await UserModel.createUser(req.body);
    if (result > 0) {
      res.status(201).json({ success: true });
    } else {
      res.status(400).json({ success: false, message: 'User not created' });
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const result = await UserModel.updateUser(req.params.id, req.body);
    if (result > 0) {
      res.json({ success: true });
    } else {
      res.status(400).json({ success: false, message: 'User not updated' });
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const result = await UserModel.deleteUser(req.params.id);
    if (result > 0) {
      res.json({ success: true });
    } else {
      res.status(400).json({ success: false, message: 'User not deleted' });
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };
