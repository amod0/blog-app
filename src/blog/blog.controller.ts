import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Put,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogDto } from './blog.dto';

@Controller('blogs')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  //Post/Create
  @Post()
  @UsePipes(new ValidationPipe()) // Use the validatorPipe class to validate
  async create(@Body() BlogDto: BlogDto) {
    return this.blogService.create(BlogDto);
  }

  //Get/find all
  @Get()
  async findAll() {
    return this.blogService.findAll();
  }

  //Get by ID
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.blogService.findOne(id);
  }

  //Put/Update
  @Put(':id')
  @UsePipes(new ValidationPipe())
  async update(@Param('id') id: string, @Body() updateBlogDto: BlogDto) {
    return this.blogService.update(id, updateBlogDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.blogService.delete(id);
  }
}
