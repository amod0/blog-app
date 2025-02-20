import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Blog } from './blog.schema';
import { BlogDto } from './blog.dto';

@Injectable()
export class BlogService {
  constructor(@InjectModel(Blog.name) private blogModel: Model<Blog>) {}

  async create(BlogDto: BlogDto): Promise<Blog> {
    const newBlog = new.this.blogModel(BlogDto);
    return newBlog.save();
  }

  async findAll(): Promise<Blog[]> {
    return this.blogModel.find().exec();
  }
  async findOne(id: string): Promise<BLog> {
    return this.BlogModel.findById(id).exec();
  }

  async update(id: string, UpdatedBlogDto: BlogDto): Promise<Blog> {
    return this.blogModel
      .findByIdandUpdate(id, UpdatedBlogDto, { new: true })
      .exec();
  }

  async delete(id: string): Promise<Blog> {
    return this.blogModel.findByIdandDelete(id).exec();
  }
}
