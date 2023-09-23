const mygroup = require('../models/mygroup');

function getAllMembers(req, res) {
  try {
    res.status(200).json(mygroup);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

function addMember(req, res) {
  const id = parseInt(req.params.id);
  const existingMember = mygroup.find(member => member.id === id);

  if (existingMember) {
    res.status(400).json({ error: 'ID đã tồn tại trong mygroup' });
  } else {
    const newMember = { id, name: req.body.name };
    mygroup.push(newMember);
    res.status(201).json(newMember);
  }
}

function getMemberById(req, res) {
  const id = parseInt(req.params.id);
  const member = mygroup.find(member => member.id === id);

  if (member) {
    res.json(member);
  } else {
    res.status(404).json({ error: 'not valid' });
  }
}

function getMembersList(req, res) {
  const id = req.params.id;

  if (!id) {
    const studentList = mygroup.map(member => `<li>${member.name}</li>`).join('');
    const htmlResponse = `<html><body><ul>${studentList}</ul></body></html>`;
    res.send(htmlResponse);
  } else {
    const student = mygroup.find(member => member.id.toString() === id);

    if (student) {
      const htmlResponse = `<html><body><ul><li>${student.name}</li></ul></body></html>`;
      res.send(htmlResponse);
    } else {
      res.status(404).send('Not valid');
    }
  }
}

module.exports = {
  getAllMembers,
  addMember,
  getMemberById,
  getMembersList,
};