import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './project.entity';
import { NotificationsGateway } from '../notifications/notifications.gateway';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private projectRepo: Repository<Project>,
    private notificationsGateway: NotificationsGateway, 
  ) {}


  // CRUD Operations for Projects

  // Create Project
  async createProject(name: string, description?: string): Promise<Project> {
    const project = this.projectRepo.create({ name, description });
    const saved = await this.projectRepo.save(project);

    this.notificationsGateway.emitProjectCreated(saved);
    return saved;
  }

  //Get All Projects
  async getAllProjects(): Promise<Project[]> {
    return this.projectRepo.find();
  }

  //Get Project by ID
  async getProjectById(id: number): Promise<Project> {
    const project = await this.projectRepo.findOne({ where: { id } });
    if (!project) throw new NotFoundException('Project not found');
    return project;
  }

  //Update Project
  async updateProject(id: number, updates: Partial<Project>): Promise<Project> {
    const project = await this.getProjectById(id);
    Object.assign(project, updates);
    const saved  = await this.projectRepo.save(project);

      this.notificationsGateway.emitProjectUpdated(saved);
    return saved;
  }

  // Delete Project
  async deleteProject(id: number): Promise<{ message: string }> {
    const project = await this.getProjectById(id);
    await this.projectRepo.remove(project);

   this.notificationsGateway.emitProjectDeleted(id);

    return { message: 'Project deleted successfully' };
  }
}
