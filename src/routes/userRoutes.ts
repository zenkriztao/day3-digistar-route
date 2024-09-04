import { Router } from 'express';
import { UserController } from '../handlers/controllers/controllers';
import { createUserValidator, updateUserValidator, getUserValidator, deleteUserValidator } from '../handlers/validators/validators';

export const userRouter = (userController: UserController) => {
  const router = Router();

  router.get('/',  userController.getAllUsers);
  router.get('/:userId',  getUserValidator, userController.getUserById);
  router.post('/',  createUserValidator, userController.createUser);
  router.put('/:userId',  updateUserValidator, userController.updateUser);
  router.delete('/:userId',  deleteUserValidator, userController.deleteUser);

  return router;
};