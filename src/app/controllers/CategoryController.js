import * as Yup from 'yup';
import Category from '../models/Category.js';

class CategoryController {
  async store(request, response) {
    const schema = Yup.object({
      name: Yup.string().required(),
    });

    try {
      schema.validateSync(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }

    const { name } = request.body;
    const { filename } = request.file;

    const existingCatergory = await Category.findOne({
      where: {
        name,
      },
    });

    if (existingCatergory) {
      return response.status(400).json({ error: 'Category already exists' });
    }

    const newCategory = await Category.create({
      name,
      path: filename,
    });

    return response.status(201).json(newCategory);
  }

  async update(request, response) {
    const schema = Yup.object({
      name: Yup.string(),
    });

    try {
      schema.validateSync(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }

    const { name } = request.body;
    const { id } = request.params;

    // pego o arquivo se existir
    let path = undefined;

    if (request.file) {
      path = request.file.filename;
    }

    // verifica se já existe categoria com o mesmo nome
    const existingCatergory = await Category.findOne({
      where: {
        name,
      },
    });

    if (existingCatergory && existingCatergory.id !== Number(id)) {
      return response.status(400).json({ error: 'Category already exists' });
    }

    // aqui removo o erro: uso "path" que existe, não "filename"
    await Category.update(
      {
        name,
        path,
      },
      {
        where: {
          id,
        },
      },
    );

    // retorno igual aula
    const updatedCategory = await Category.findByPk(id);

    return response.status(200).json(updatedCategory);
  }

  async index(_request, response) {
    const categories = await Category.findAll();

    return response.status(200).json(categories);
  }
}

export default new CategoryController();
