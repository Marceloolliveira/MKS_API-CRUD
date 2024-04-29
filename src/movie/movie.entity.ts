import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'movie' })
export class Movie {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'title', nullable: false })
  title: string;

  @Column({ name: 'synopsis', nullable: false })
  synopsis: string;

  @Column({ name: 'director', nullable: false })
  director: string;

  @Column({ name: 'genre', nullable: false })
  genre: string;

  @Column({ name: 'releaseYear', nullable: false })
  releaseYear: number;

  @CreateDateColumn({ name: 'created_at' }) 
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' }) 
  updatedAt: string;
}
