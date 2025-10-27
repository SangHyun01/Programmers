class MinHeap {
    constructor() {
        this.heap = [];
    }
    size() {
        return this.heap.length;
    }
    peak() {
        return this.heap[0] || null;
    }
    add(value) {
        this.heap.push(value);
        this.bubbleUp();
    }
    poll() {
        // 예외
        if(this.size() === 0) return null;
        if(this.size() === 1) return this.heap.pop();
        
        const minValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return minValue;
    }
    
    bubbleUp() {
        let index = this.size() - 1;
        
        while(index > 0) {
            const element = this.heap[index];
            
            const parentIndex = Math.floor((index-1)/2);
            const parent = this.heap[parentIndex];

            if(parent <= element) break;
            this.heap[index] = parent;
            this.heap[parentIndex] = element;
            index = parentIndex;    
        }
    }
    bubbleDown() {
        let index = 0;
        const lastIndex = this.size() - 1;
        
        while(true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            
            let smallestIndex = index;
            
            if(leftChildIndex <= lastIndex && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = leftChildIndex;
            }
            if(rightChildIndex <= lastIndex && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = rightChildIndex;
            }
            if(smallestIndex === index) break;
            
            [this.heap[index],this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
            index = smallestIndex;
        }
    }
}

function solution(book_time) {
    const timeToMinutes = (timeStr) => {
        const [hour, minute] = timeStr.split(':').map(Number);
        return hour * 60 + minute;
    }
    
    const bookings = book_time.map(([start, end]) => {
        return [timeToMinutes(start), timeToMinutes(end) + 10];
    });
    
    // 최소힙 생성
    const roomEndTimeHeap = new MinHeap();
    let maxRoomNeeded = 0;
    
    bookings.sort((a,b) => a[0] - b[0]);
    
    for(const [start,end] of bookings) {
        if(roomEndTimeHeap.size() > 0 && roomEndTimeHeap.peak() <= start) {
            roomEndTimeHeap.poll();
        }
        roomEndTimeHeap.add(end);
        
        maxRoomNeeded = Math.max(maxRoomNeeded, roomEndTimeHeap.size());
    }
    return maxRoomNeeded;
}