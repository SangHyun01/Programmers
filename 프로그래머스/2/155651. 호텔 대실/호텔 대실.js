// 최소 힙 구현
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
        if(this.size() === 0) return null;
        if(this.size() === 1) return this.heap.pop();
        
        const minValue = this.heap[0];
        this.heap[0] = this.heap.pop(); // 맨 끝 값을 루트로
        this.bubbleDown();
        return minValue;
    }
    // 내부 함수
    bubbleUp() {
        let index = this.size() - 1;
        while(index > 0) {
            const element = this.heap[index];
            const parentIndex = Math.floor((index - 1)/2);
            const parent = this.heap[parentIndex];
            
            if(parent <= element) break; // 부모가 더 작거나 같으면 멈춤
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
            let smallestIndex = index; // 현재 부모 노드 인덱스
            
            // 왼쪽 자식이 부모보다 작은지 검사
            if(leftChildIndex <= lastIndex && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = leftChildIndex;
            }
            
            // 오른쪽 자식이 부모보다 작은지 검사
            if(rightChildIndex <= lastIndex && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = rightChildIndex;
            }
            if(smallestIndex === index) break;
            
            [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
            index = smallestIndex;
        }
    }
}



function solution(book_time) {
    // 시간을 분단위로 변환 및 청소 시간 10분 추가
    const timeToMinutes = (timeStr) => {
        const [hour, minute] = timeStr.split(':').map(Number);
        return hour * 60 + minute;
    };
    
    const bookings = book_time.map(([start, end]) => {
        return [timeToMinutes(start), timeToMinutes(end) + 10];
    });
    
    // 시작 시간 기준 정렬
    bookings.sort((a,b) => a[0] - b[0]);
    
    // 최소 힙 생성
    const roomEndTimeHeap = new MinHeap();
    let maxRoomsNeeded = 0;
    
    // 예약 순회
    for(const [start,end] of bookings) {
        // 가장 빨리 비는 방 확인
        if(roomEndTimeHeap.size() > 0 && roomEndTimeHeap.peak() <= start) {
            roomEndTimeHeap.poll(); // 기존 방 제거
        }
        
        // 새 방 배정 또는 재사용한 방의 새 종료 시간 추가
        roomEndTimeHeap.add(end);
        
        // 필요한 최대 객실 수 갱신
        maxRoomsNeeded = Math.max(maxRoomsNeeded, roomEndTimeHeap.size());
    }
    return maxRoomsNeeded;
}



// 첫 손님 14:10~19:20 두번쨰는 19:20 + 00:10 부터 사용가능

// 14:10 ~ 19:20 이 시간 사이에 있는 시간 개수:
// 14:20 ~ 15:20 15:30부터 가능 16:40 ~ 18:20
// 15:00 ~ 17:00 17:10부터 가능 18:20 ~ 21:20
