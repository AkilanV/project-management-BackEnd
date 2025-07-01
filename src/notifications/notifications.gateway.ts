import {
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { Injectable } from '@nestjs/common';
import { Project } from '../projects/project.entity';

@WebSocketGateway({ cors: true })
@Injectable()
export class NotificationsGateway {
  @WebSocketServer()
  server: Server;

  emitProjectCreated(project: Project) {
    this.server.emit('projectCreated', project);
  }

  emitProjectUpdated(project: Project) {
    this.server.emit('projectUpdated', project);
  }

  emitProjectDeleted(projectId: number) {
    this.server.emit('projectDeleted', projectId);
  }
}
