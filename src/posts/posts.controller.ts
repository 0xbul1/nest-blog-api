import { Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('posts')
@ApiTags('帖子')
export class PostsController {
  @Get()
  @ApiOperation({ summary: '显示博客列表' })
  index() {
    return [{ id: 1 }, { id: 2 }, { id: 1 }, { id: 1 }, { id: 1 }];
  }

  @Post()
  create() {
    return {
      success: true,
    };
  }

  @Get(':id')
  detail() {
    return {
      id: 1,
      title: '111',
    };
  }
}
