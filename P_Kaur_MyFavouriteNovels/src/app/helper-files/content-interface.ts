/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

export interface Content {
  id: number;
  title: string;
  description: string;
  creator?: string;
  imgURL?: string;
  type?: string;
  tags?: string[];
  releaseDate?: unknown;
  price?: number;
  undefined?: undefined;
  null?: null;
  publisher?: String;
  color: String;
  fontFamily: String;
  filteredRow: boolean;
}
