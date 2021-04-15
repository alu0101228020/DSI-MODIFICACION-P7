import 'mocha';
import {expect} from 'chai';
import {Tail} from '../src/tail';

describe('Testeamos la clase Tail<Number>', () => {
  const NumberType = new Tail<Number>();

  it('Existe un objeto de la clase Tail', () => {
    expect(NumberType).not.to.be.equal(null);
  });

  it('Se debe poder introducir elementos en la cola de modo que NumberType.push(9) devuelve "[ 9 ]"', () => {
    NumberType.push(9);
    expect(NumberType.print()).to.be.eql("[ 9 ]");
  });

  it('Se extrae el primer elemento insertado de la cola de modo que NumberType.pop() devuelve 9', () => {
    NumberType.push(1);
    NumberType.push(2);
    NumberType.push(4);
    expect(NumberType.pop()).to.be.equal(9);
  });

  it('Se obtiene el primer elemento de la cola sin elmininarlo de modo que NumberType.pseek() devuelve 1', () => {
    expect(NumberType.pseek()).to.be.equal(1);
  });

  it('Se obtiene el tamaño de la cola de modo que NumberType.size() devuelve 3', () => {
    expect(NumberType.size()).to.be.equal(3);
  });

  it('Se obtiene la representación de la cola de modo que NumberType.print() devuelve [ 1, 2, 4 ]', () => {
    expect(NumberType.print()).to.be.eql("[ 1, 2, 4 ]");
  });
});

describe('Testeamos la clase Tail<String>', () => {
  const StringType = new Tail<String>();

  it('Existe un objeto de la clase Tail', () => {
    expect(StringType).not.to.be.equal(null);
  });

  it('Se debe poder introducir elementos en la cola de modo que StringType.push("string1") devuelve "[ string1 ]"', () => {
    StringType.push("string1");
    expect(StringType.print()).to.be.eql("[ string1 ]");
  });

  it('Se extrae el primer elemento insertado de la cola de modo que StringType.pop() devuelve "string1"', () => {
    StringType.push("string2");
    StringType.push("string5");
    StringType.push("string3");
    expect(StringType.pop()).to.be.equal("string1");
  });

  it('Se obtiene el primer elemento sin elmininarlo de modo que StringType.pseek() devuelve "string2"', () => {
    expect(StringType.pseek()).to.be.equal("string2");
  });

  it('Se obtiene el tamaño de la cola de modo que StringType.size() devuelve 3', () => {
    expect(StringType.size()).to.be.equal(3);
  });

  it('Se obtiene la representación de la cola de modo que StringType.print() devuelve [ string2, string5, string3 ]', () => {
    expect(StringType.print()).to.be.eql("[ string2, string5, string3 ]");
  });
});
