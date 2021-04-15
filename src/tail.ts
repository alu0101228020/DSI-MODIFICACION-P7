/**
 * Interface genérica con el método FIFO de una cola
 */
export interface InterfaceFifo<T> {
    /**
     * Inserta un elemento en la cola
     * @param element Elemento a añadir
     */
    push(element: T): void;

    /**
     * Extrae el primer elemento insertado en la cola y lo devuelve
     */
    pop(): void;

    /**
     * Devuelve el primer elemento insertado en la cola sin extraerlo
     */
    pseek(): T;

    /**
     * Devuelve el número de elementos que contiene la cola
     */
    size(): number;

    /**
     * Visualiza el contenido de la cola
     */
    print(): string;
}

/**
 * Clase genérica que permite realizar el comportamiento de una cola
 */
export class Tail<T> implements InterfaceFifo<T> {
  /**
   * Constructor de la clase Tail
   * @param tail Array que simboliza una cola
   */
  constructor(private tail: T[] = []) {
  }

  /**
   * Inserta un elemento en la cola
   * @param element Elemento a añadir
   */
  push(element: T): void {
    this.tail.push(element);
  }

  /**
   * Extrae el primer elemento insertado en la cola
   * @returns El elemento eliminado
   */
  pop(): T {
    const popped: T = this.tail[0];
    this.tail.shift();
    return popped;
  }

  /**
   * Devuelve el primer elemento insertado en la cola sin extraerlo
   * @returns El primer elemento
   */
  pseek(): T {
    return this.tail[0];
  }

  /**
   * Devuelve el número de elementos que contiene la cola
   * @returns El tamaño de la cola
   */
  size(): number {
    return this.tail.length;
  }

  /**
   * Visualiza el contenido de la cola
   * @returns Los elementos de la cola en un formato visible
   */
  print(): string {
    let arrayTail: string = '[ ';
    for (let i: number = 0; i < this.tail.length; i++) {
      if (i == this.tail.length - 1) {
        arrayTail += this.tail[i] + ' ';
      } else {
        arrayTail += this.tail[i] + ', ';
      }
    }
    console.log(arrayTail + ']');
    return arrayTail + ']';
  }
}
