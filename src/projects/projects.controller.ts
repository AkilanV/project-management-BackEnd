// src/projects/projects.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { Project } from './project.entity';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  createProject(@Body() body: { name: string; description?: string }): Promise<Project> {
    return this.projectsService.createProject(body.name, body.description);
  }

  @Get()
  getAllProjects(): Promise<Project[]> {
    return this.projectsService.getAllProjects();
  }

  @Get(':id')
  getProjectById(@Param('id') id: number): Promise<Project> {
    return this.projectsService.getProjectById(id);
  }

  @Put(':id')
  updateProject(
    @Param('id') id: number,
    @Body() body: { name?: string; description?: string },
  ): Promise<Project> {
    return this.projectsService.updateProject(id, body);
  }

  @Delete(':id')
  deleteProject(@Param('id') id: number): Promise<{ message: string }> {
    return this.projectsService.deleteProject(id);
  }
}
