export interface ArrowType {
  startArrow: string;
  endArrow: string;
}

export interface ParameterType {
  parameter1: string;
  parameter2: string;
}

export interface ComponentType {
  id: string;
  children: string[];
  parameter: ParameterType;
}

export interface ComponentObjectType {
  [name: string]: ComponentType;
}
