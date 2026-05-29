export type Database = {
  public: {
    Tables: {
      projects: {
        Row: {
          slug: string;
          title: string;
          summary: string;
          problem: string;
          solution: string;
          outcome: string;
          role: string;
          year: string;
          stack: string[];
          image: string;
          proof_images: string[];
          featured: boolean;
          sort_order: number;
          created_at: string;
        };
        Insert: {
          slug: string;
          title: string;
          summary: string;
          problem: string;
          solution: string;
          outcome: string;
          role: string;
          year: string;
          stack?: string[];
          image: string;
          proof_images?: string[];
          featured?: boolean;
          sort_order?: number;
          created_at?: string;
        };
        Update: {
          slug?: string;
          title?: string;
          summary?: string;
          problem?: string;
          solution?: string;
          outcome?: string;
          role?: string;
          year?: string;
          stack?: string[];
          image?: string;
          proof_images?: string[];
          featured?: boolean;
          sort_order?: number;
          created_at?: string;
        };
        Relationships: [];
      };
      certifications: {
        Row: {
          id: string;
          title: string;
          issuer: string;
          issued: string;
          credential_id: string;
          image: string;
          skills: string[];
          sort_order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          issuer: string;
          issued: string;
          credential_id: string;
          image: string;
          skills?: string[];
          sort_order?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          issuer?: string;
          issued?: string;
          credential_id?: string;
          image?: string;
          skills?: string[];
          sort_order?: number;
          created_at?: string;
        };
        Relationships: [];
      };
      contact_messages: {
        Row: {
          id: string;
          name: string;
          email: string;
          subject: string | null;
          message: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          subject?: string | null;
          message: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          subject?: string | null;
          message?: string;
          created_at?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
