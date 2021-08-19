//섹션 111111111111111111111111111111111111111

//1-11 대문자 찾기
(() => {
  function solution(s) {
    let answer = 0;
    for (let x of s) {
      //let num=x.charCodeAt();
      //if(num>=65 && num<=90) answer++;
      if (x === x.toUpperCase()) answer++;
    }

    return answer;
  }

  let str = 'KoreaTimeGood';
  console.log(solution(str));
})();
(() => {
  function solution(s) {
    let answer = 0;
    for (const x of s) {
      if (x === x.toUpperCase()) answer++;
    }
    return answer;
  }

  let str = 'KoreaTimeGood';
  console.log(solution(str));
})();

//1-12 대문자로 통일
(() => {
  function solution(s) {
    let answer = '';
    for (let x of s) {
      let num = x.charCodeAt();
      if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
      else answer += x;

      //if(x===x.toLowerCase()) answer+=x.toUpperCase();
      //else answer+=x;
    }

    return answer;
  }

  let str = 'ItisTimeToStudy';
  console.log(solution(str));
})();
(() => {
  function solution(s) {
    let answer = '';
    for (const x of s) {
      if (x !== x.toUpperCase()) answer += x.toUpperCase();
      else answer += x;
    }
    return answer;
  }
  let str = 'ItisTimeToStudy';
  console.log(solution(str));
})();

//1-13 대소문자 변환
(() => {
  function solution(s) {
    let answer = '';
    for (let x of s) {
      if (x === x.toUpperCase()) answer += x.toLowerCase();
      else answer += x.toUpperCase();
    }
    return answer;
  }

  console.log(solution('StuDY'));
})();
(() => {
  function solution(s) {
    let answer = '';
    for (const x of s) {
      x === x.toUpperCase()
        ? (answer += x.toLowerCase())
        : (answer += x.toUpperCase());
    }
    return answer;
  }

  console.log(solution('StuDY'));
})();

//1-14 가장 긴 문자열
(() => {
  function solution(s) {
    let answer = '',
      max = Number.MIN_SAFE_INTEGER;
    for (let x of s) {
      if (x.length > max) {
        max = x.length;
        answer = x;
      }
    }
    return answer;
  }
  let str = ['teacher', 'time', 'student', 'beautiful', 'good'];
  console.log(solution(str));
})();
(() => {
  function solution(s) {
    let answer;
    let max = Number.MIN_SAFE_INTEGER;
    for (const x of s) {
      if (x.length > max) {
        max = x.length;
        answer = x;
      }
    }
    return answer;
  }
  let str = ['teacher', 'time', 'student', 'beautiful', 'good'];
  console.log(solution(str));
})();

//1-15 가운데문자 출력
(() => {
  function solution(s) {
    let answer;
    let mid = Math.floor(s.length / 2);
    if (s.length % 2 === 1) answer = s.substring(mid, mid + 1);
    else answer = s.substring(mid - 1, mid + 1);
    //if(s.length%2===1) answer=s.substr(mid, 1);
    //else answer=s.substr(mid-1, 2);
    return answer;
  }
  console.log(solution('study'));
})();
(() => {
  function solution(s) {
    let answer;
    if (s.length % 2 === 1) answer = s[Math.floor(s.length / 2)];
    else answer = s[s.length / 2] + s[s.length / 2 + 1];
    return answer;
  }
  console.log(solution('study'));
})();

//1-16 중복문자제거
(() => {
  function solution(s) {
    let answer = '';
    //console.log(s.indexOf("K"));
    for (let i = 0; i < s.length; i++) {
      //console.log(s[i], i, s.indexOf(s[i]));
      if (s.indexOf(s[i]) === i) answer += s[i];
    }
    return answer;
  }
  console.log(solution('ksekkset'));
})();
(() => {
  function solution(s) {
    let answer = '';
    for (let i = 0; i < s.length; i++) {
      if (s.indexOf(s[i]) === i) answer += s[i];
    }
    return answer;
  }
  console.log(solution('ksekkset'));
})();
//1-17 중복단어 제거
(() => {
  function solution(s) {
    let answer;
    //console.log(s.indexOf("time"));
    answer = s.filter(function (v, i) {
      return s.indexOf(v) === i;
    });
    return answer;
  }
  let str = ['good', 'time', 'good', 'time', 'student'];
  console.log(solution(str));
})();
(() => {
  function solution(s) {
    let answer = [];
    for (let i = 0; i < s.length; i++) {
      if (s.indexOf(s[i]) === i) answer.push(s[i]);
    }
    return answer;
  }
  let str = ['good', 'time', 'good', 'time', 'student'];
  console.log(solution(str));
})();

//섹션 222222222222222222222222222222222222222222

//2-1 큰 수 출력하기
(() => {
  function solution(arr) {
    let answer = [];
    answer.push(arr[0]);
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > arr[i - 1]) answer.push(arr[i]);
    }
    return answer;
  }

  let arr = [7, 3, 9, 5, 6, 12];
  console.log(solution(arr));
})();

(() => {
  function solution(arr) {
    let answer = arr.filter((v, i, a) => arr[i] > arr[i - 1]);
    answer.unshift(arr[0]);
    return answer;
  }

  let arr = [7, 3, 9, 5, 6, 12];
  console.log(solution(arr));
})();

//2-2 보이는학생
(() => {
  function solution(arr) {
    let answer = 1,
      max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        answer++;
        max = arr[i];
      }
    }
    return answer;
  }

  let arr = [130, 135, 148, 140, 145, 150, 150, 153];
  console.log(solution(arr));
})();
(() => {
  function solution(arr) {
    let answer = 1;
    let max = arr[0];
    arr.forEach((v) => {
      if (v > max) {
        max = v;
        answer++;
      }
    });
    return answer;
  }

  let arr = [130, 135, 148, 140, 145, 150, 150, 153];
  console.log(solution(arr));
})();

//2-3 가위바위보
(() => {
  function solution(a, b) {
    let answer = '';
    for (let i = 0; i < a.length; i++) {
      if (a[i] === b[i]) answer += 'D ';
      else if (a[i] === 1 && b[i] === 3) answer += 'A ';
      else if (a[i] === 2 && b[i] === 1) answer += 'A ';
      else if (a[i] === 3 && b[i] === 2) answer += 'A ';
      else answer += 'B ';
    }

    return answer;
  }

  let a = [2, 3, 3, 1, 3];
  let b = [1, 1, 2, 2, 3];
  console.log(solution(a, b));
})();
(() => {
  function solution(a, b) {
    let answer = '';
    a.forEach((v, i) => {
      if (a[i] === b[i]) answer += 'D';
      else if (a[i] === 1 && b[i] === 3) answer += 'A ';
      else if (a[i] === 2 && b[i] === 1) answer += 'A ';
      else if (a[i] === 3 && b[i] === 2) answer += 'A ';
      else answer += 'B ';
    });
    return answer.trim();
  }

  let a = [2, 3, 3, 1, 3];
  let b = [1, 1, 2, 2, 3];
  console.log(solution(a, b));
})();

//2-4 점수계산
(() => {
  function solution(arr) {
    let answer = 0,
      cnt = 0;
    for (let x of arr) {
      if (x === 1) {
        cnt++;
        answer += cnt;
      } else cnt = 0;
    }

    return answer;
  }

  let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
  console.log(solution(arr));
})();
(() => {
  function solution(arr) {
    let answer = (cnt = 0);
    arr.forEach((v) => {
      if (v) {
        cnt++;
        answer += cnt;
      } else cnt = 0;
    });
    return answer;
  }

  let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
  console.log(solution(arr));
})();

//2-5 등수구하기
(() => {
  function solution(arr) {
    let n = arr.length;
    let answer = Array.from({ length: n }, () => 1);
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (arr[j] > arr[i]) answer[i]++;
      }
    }
    return answer;
  }

  let arr = [87, 89, 92, 100, 76];
  console.log(solution(arr));
})();
(() => {
  function solution(arr) {
    let n = arr.length;
    let answer = Array(n)
      .fill()
      .map(() => n);
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        // if (i === j) continue;
        if (arr[j] > arr[i]) answer[j]--;
      }
    }
    return answer;
  }

  let arr = [87, 89, 92, 100, 76];
  console.log(solution(arr));
})();

//2-6 격자판 최대합
(() => {
  function solution(arr) {
    let answer = Number.MIN_SAFE_INTEGER;
    let n = arr.length;
    let sum1 = (sum2 = 0);
    for (let i = 0; i < n; i++) {
      sum1 = sum2 = 0;
      for (let j = 0; j < n; j++) {
        sum1 += arr[i][j];
        sum2 += arr[j][i];
      }
      answer = Math.max(answer, sum1, sum2);
    }
    sum1 = sum2 = 0;
    for (let i = 0; i < n; i++) {
      sum1 += arr[i][i];
      sum2 += arr[i][n - i - 1];
    }
    answer = Math.max(answer, sum1, sum2);
    return answer;
  }

  let arr = [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ];
  console.log(solution(arr));
})();
(() => {
  function solution(arr) {
    let answer = Number.MIN_SAFE_INTEGER;
    let n = arr.length;
    arr.forEach((v) => {
      if (answer < v.reduce((a, c) => a + c, 0))
        answer = v.reduce((a, c) => a + c, 0);
    });

    let d1 = 0;
    let d2 = 0;
    arr.forEach((v, i) => {
      d1 += v[i];
      d2 += v[n - 1 - i];
    });
    // console.log(d1, d2);
    let d3;
    for (let i = 0; i < n; i++) {
      d3 = 0;
      for (let j = 0; j < n; j++) {
        d3 += arr[j][i];
      }
      // console.log(d3);
    }
    answer = Math.max(answer, d1, d2, d3);
    return answer;
  }

  let arr = [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ];
  console.log(solution(arr));
})();
(() => {
  function solution(arr) {
    let answer = Number.MIN_SAFE_INTEGER;
    let n = arr.length;
    let sum1 = (sum2 = 0);

    for (let i = 0; i < n; i++) {
      sum1 = sum2 = 0;
      for (let j = 0; j < n; j++) {
        sum1 += arr[i][j];
        sum2 += arr[j][i];
      }
      answer = Math.max(answer, sum1, sum2);
    }

    sum1 = sum2 = 0;
    for (let i = 0; i < n; i++) {
      sum1 += arr[i][i];
      sum2 += arr[i][n - 1 - i];
    }
    answer = Math.max(answer, sum1, sum2);
    return answer;
  }

  let arr = [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ];
  console.log(solution(arr));
})();

//2-7 봉우리
(() => {
  function solution(arr) {
    let answer = 0;
    let n = arr.length;
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        let flag = 1;
        for (let k = 0; k < 4; k++) {
          let nx = i + dx[k];
          let ny = j + dy[k];
          if (
            nx >= 0 &&
            nx < n &&
            ny >= 0 &&
            ny < n &&
            arr[nx][ny] >= arr[i][j]
          ) {
            flag = 0;
            break;
          }
        }
        if (flag) answer++;
      }
    }

    return answer;
  }

  let arr = [
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ];
  console.log(solution(arr));
})();
(() => {
  function solution(arr) {
    let answer = 0;
    let n = arr.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (
          (arr[i - 1]?.[j] === undefined || arr[i][j] > arr[i - 1][j]) &&
          (arr[i]?.[j + 1] === undefined || arr[i][j] > arr[i][j + 1]) &&
          (arr[i + 1]?.[j] === undefined || arr[i][j] > arr[i + 1][j]) &&
          (arr[i]?.[j - 1] === undefined || arr[i][j] > arr[i][j - 1])
        )
          answer++;
      }
    }
    return answer;
  }

  let arr = [
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ];
  console.log(solution(arr));
})();
(() => {
  function solution(arr) {
    let answer = 0;
    let n = arr.length;
    let dx = [-1, 0, +1, 0];
    let dy = [0, +1, 0, -1];
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        let flag = 1;
        for (let k = 0; k < 4; k++) {
          let nx = i + dx[k];
          let ny = j + dy[k];
          if (
            nx >= 0 &&
            nx <= n - 1 &&
            ny >= 0 &&
            ny <= n - 1 &&
            arr[i][j] <= arr[nx][ny]
          ) {
            flag = 0;
            break;
          }
        }
        if (flag) answer++;
      }
    }
    return answer;
  }

  let arr = [
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ];
  console.log(solution(arr));
})();

//섹션 3333333333333333333333333333333

//3-1 회문문자열
(() => {
  function solution(s) {
    let answer = 'YES';
    s = s.toLowerCase();
    let len = s.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
      if (s[i] != s[len - i - 1]) return 'NO';
    }
    return answer;
  }

  let str = 'goooG';
  console.log(solution(str));
})();
(() => {
  function solution(s) {
    let answer = 'yes';
    let n = s.length;
    let mid = Math.floor(n / 2);
    s = s.toUpperCase();
    for (let i = 0; i < mid; i++) {
      if (s[i] !== s[n - 1 - i]) return 'NO!';
    }
    return answer;
  }

  let str = 'goooG';
  console.log(solution(str));
})();

//3-2 유효한 펠린드롬
(() => {
  function solution(s) {
    let answer = 'YES';
    s = s.toLowerCase().replace(/[^a-z]/g, '');
    if (s.split('').reverse().join('') !== s) return 'NO';
    return answer;
  }

  let str = 'found7, time: study; Yduts; emit, 7Dnuof';
  console.log(solution(str));
})();
(() => {
  function solution(s) {
    let answer = 'YES';
    let tmp = '';
    for (const x of s) {
      if (
        (x.charCodeAt() >= 97 && x.charCodeAt() <= 122) ||
        (x.charCodeAt() >= 65 && x.charCodeAt() <= 90)
      )
        tmp += x;
    }
    tmp = tmp.toUpperCase();
    let n = tmp.length;
    let mid = Math.floor(n / 2);
    for (let i = 0; i < mid; i++) {
      if (tmp[i] !== tmp[n - 1 - i]) return 'no';
    }
    return answer;
  }

  let str = 'found7, time: study; Yduts; emit, 7Dnuof';
  console.log(solution(str));
})();
(() => {
  function solution(s) {
    let answer = 'YES';
    s = s.toLowerCase().replace(/[^a-z]/g, '');
    console.log(s);
    if (s !== s.split('').reverse().join('')) return 'no';
    return answer;
  }

  let str = 'found7, time: study; Yduts; emit, 7Dnuof';
  console.log(solution(str));
})();

//3-3 숫자만 추출
(() => {
  function solution(str) {
    let answer = '';
    for (let x of str) {
      if (!isNaN(x)) answer += x;
    }
    return parseInt(answer);
  }

  let str = 'g0en2T0s8eSoft';
  console.log(solution(str));
})();
(() => {
  function solution(str) {
    return Number(str.toLowerCase().replace(/[a-z]/g, ''));
  }

  let str = 'g0en2T0s8eSoft';
  console.log(solution(str));
})();
//3-3 가장짧은 문자거리
(() => {
  function solution(s, t) {
    let answer = [];
    let p = 1000;
    for (let x of s) {
      if (x === t) {
        p = 0;
        answer.push(p);
      } else {
        p++;
        answer.push(p);
      }
    }
    p = 1000;
    for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] === t) p = 0;
      else {
        p++;
        answer[i] = Math.min(answer[i], p);
      }
    }
    return answer;
  }

  let str = 'teachermode';
  console.log(solution(str, 'e'));
})();
(() => {
  function solution(s, t) {
    let answer = [];
    let n = s.length;
    let front = 0;
    let back = 0;
    let frontArr = [];
    let backArr = [];
    for (let i = 0; i < n; i++) {
      if (s[i] !== t) front++;
      else front = 0;
      if (s[n - 1 - i] !== t) back++;
      else back = 0;
      frontArr.push(front);
      backArr.unshift(back);
    }
    // console.log(frontArr);
    // console.log(backArr);
    for (let i = 0; i < n; i++) {
      answer.push(Math.min(frontArr[i], backArr[i]));
    }
    return answer;
  }

  let str = 'teachermode';
  console.log(solution(str, 'e'));
})();
(() => {
  function solution(s, t) {
    let answer = [];
    let n = s.length;
    let p = Number.MAX_SAFE_INTEGER;
    for (const x of s) {
      if (x !== t) p++;
      else p = 0;
      answer.push(p);
    }
    p = Number.MAX_SAFE_INTEGER;
    for (let i = n - 1; i >= 0; i--) {
      if (s[i] !== t) p++;
      else p = 0;
      answer[i] = Math.min(answer[i], p);
    }
    return answer;
  }

  let str = 'teachermode';
  console.log(solution(str, 'e'));
})();
//3-3 문자열압축
(() => {
  function solution(s) {
    let answer = '';
    let cnt = 1;
    s = s + ' ';
    for (let i = 0; i < s.length - 1; i++) {
      if (s[i] === s[i + 1]) cnt++;
      else {
        answer += s[i];
        if (cnt > 1) answer += cnt;
        cnt = 1;
      }
    }
    return answer;
  }

  let str = 'KKHSSSSSSSE';
  console.log(solution(str));
})();
(() => {
  function solution(s) {
    let answer = '';
    let cnt = 1;
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== s[i + 1]) {
        if (cnt === 1) answer += s[i];
        else {
          answer += s[i] + cnt;
          cnt = 1;
        }
      } else cnt++;
    }
    return answer;
  }

  let str = 'KKHSSSSSSSE';
  console.log(solution(str));
})();

// 44444444444444444444444444444444444444444
// brute force

//4-1 자릿수합
(() => {
  function solution(n, arr) {
    let answer,
      max = Number.MIN_SAFE_INTEGER;
    for (let x of arr) {
      let sum = 0,
        tmp = x;
      while (tmp) {
        sum += tmp % 10;
        tmp = Math.floor(tmp / 10);
      }
      if (sum > max) {
        max = sum;
        answer = x;
      } else if (sum === max) {
        if (x > answer) answer = x;
      }
    }
    return answer;
  }

  let arr = [128, 460, 603, 40, 521, 137, 123];
  console.log(solution(7, arr));
})();
(() => {
  function solution(n, arr) {
    let answer;
    let sum = 0;
    let max = Number.MIN_SAFE_INTEGER;
    arr.forEach((v) => {
      let q = v;
      while (q) {
        sum += q % 10;
        q = parseInt(q / 10, 10);
      }
      if (sum > max) {
        max = sum;
        answer = v;
      } else if (sum === max) {
        if (v > answer) answer = v;
      }
      sum = 0;
    });
    return answer;
  }

  let arr = [128, 460, 603, 40, 521, 137, 123];
  console.log(solution(7, arr));
})();
//4-2 뒤집은 소수
(() => {
  function isPrime(num) {
    if (num === 1) return false;
    for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  function solution(arr) {
    let answer = [];
    for (let x of arr) {
      let res = 0;
      while (x) {
        let t = x % 10;
        res = res * 10 + t;
        x = parseInt(x / 10);
      }
      if (isPrime(res)) answer.push(res);
    }
    return answer;
  }

  let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
  console.log(solution(arr));
})();
(() => {
  function isPrime(num) {
    if (num === 1) return false;
    for (let i = 2; i < Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  function solution(arr) {
    let answer = [];
    for (let x of arr) {
      let result = 0;
      while (x) {
        let remainder = x % 10;
        result = 10 * result + remainder;
        x = parseInt(x / 10, 10);
      }
      if (isPrime(result)) answer.push(result);
    }
    return answer;
  }

  let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
  console.log(solution(arr));
})();
(() => {
  function solution(arr) {
    let answer = [];
    arr.forEach((v, i) => {
      v = Number(String(v).split('').reverse().join(''));
      if (
        [2, 3, 5, 7].includes(v) ||
        (v !== 1 && v % 2 !== 0 && v % 3 !== 0 && v % 5 !== 0 && v % 7 !== 0)
      )
        answer.push(v);
    });
    return answer;
  }
  let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
  console.log(solution(arr));
})();
//4-3 멘토링
(() => {
  function solution(test) {
    let answer = 0;
    tests = test.length; // 시험수
    students = test[0].length; //학생수
    for (let i = 1; i <= students; i++) {
      for (let j = 1; j <= students; j++) {
        let cnt = 0;
        for (let k = 0; k < tests; k++) {
          let pi = (pj = 0);
          for (let s = 0; s < students; s++) {
            if (test[k][s] === i) pi = s;
            if (test[k][s] === j) pj = s;
          }
          if (pi < pj) cnt++;
        }
        if (cnt === tests) answer++;
      }
    }
    return answer;
  }

  let arr = [
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ];
  console.log(solution(arr));
})();
(() => {
  function solution(test) {
    let answer = 0;
    let students = arr[0].length;
    let games = arr.length;
    for (let i = 1; i <= students; i++) {
      for (let j = 1; j <= students; j++) {
        if (i === j) continue;
        let flag = 1;
        for (let k = 0; k < games; k++) {
          if (arr[k].indexOf(i) < arr[k].indexOf(j)) {
            flag = 0;
            break;
          }
        }
        if (flag) answer++;
      }
    }
    return answer;
  }

  let arr = [
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ];
  console.log(solution(arr));
})();

(() => {
  function solution(test) {
    let answer = 0;
    let students = arr[0].length;
    let games = arr.length;
    for (let i = 1; i <= students; i++) {
      //mentor
      for (let j = 1; j <= students; j++) {
        //mentee
        let rec = 0;
        for (let k = 0; k < games; k++) {
          //game-stage
          let torRank = (teeRank = 0);
          for (let l = 0; l < students; l++) {
            //finding students' rank
            if (arr[k][l] === i) torRank = l;
            if (arr[k][l] === j) teeRank = l;
          }
          if (torRank < teeRank) rec++;
        }
        if (rec === games) answer++;
      }
    }
    return answer;
  }

  let arr = [
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ];
  console.log(solution(arr));
})();

//4-4 졸업선물
(() => {
  function solution(m, product) {
    let answer = 0;
    let n = product.length;
    product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
    for (let i = 0; i < n; i++) {
      let money = m - (product[i][0] / 2 + product[i][1]);
      let cnt = 1;
      for (let j = 0; j < n; j++) {
        if (j !== i && product[j][0] + product[j][1] > money) break;
        if (j !== i && product[j][0] + product[j][1] <= money) {
          money -= product[j][0] + product[j][1];
          cnt++;
        }
      }
      answer = Math.max(answer, cnt);
    }
    return answer;
  }

  let arr = [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
  ];
  console.log(solution(28, arr));
})();
(() => {
  function solution(m, product) {
    let answer = 0;
    let options = [];

    for (let i = 0; i < product.length; i++) {
      // 뭘 할인할지
      let option = [];
      let discounted = product[i][0] / 2 + product[i][1];
      for (let j = 0; j < product.length; j++) {
        //그때 애들가격
        if (i === j) option.push(discounted);
        else option.push(product[j][0] + product[j][1]);
      }
      option.sort((a, b) => a - b);
      options.push(option);
    }
    console.log(options);
    for (let k = 0; k < options.length; k++) {
      //각 option마다 최대 몇명가능한지 구하자
      let possible;
      let sum = options[k][0];
      for (let l = 1; l < options[0].length; l++) {
        if (sum + options[k][l] > m) {
          possible = l;
        }
        if (sum + options[k][l] === m) {
          possible = l + 1;
        }
        if (sum + options[k][l] < m) {
          sum += options[k][l];
        }
      }
      answer = Math.max(answer, possible);
    }
    return answer;
  }

  let arr = [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
  ];
  console.log(solution(28, arr));
})();
(() => {
  function solution(m, product) {
    let answer = 0;
    let n = product.length;
    product.sort((e, s) => e[0] + e[1] - (s[0] + s[1]));
    console.log(product);
    for (let i = 0; i < n; i++) {
      let budget = m - (product[i][0] / 2 + product[i][1]);
      let cnt = 1;
      for (let j = 0; j < n; j++) {
        if (j === i) continue;

        if (product[j][0] + product[j][1] > budget) break;
        else {
          cnt++;
          budget -= product[j][0] + product[j][1];
        }
        answer = Math.max(answer, cnt);
      }
    }

    return answer;
  }

  let arr = [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
  ];
  console.log(solution(28, arr));
})();
//4-5 K번째 큰수
(() => {
  function solution(n, k, card) {
    let answer;
    let tmp = new Set();
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        for (let k = j + 1; k < n; k++) {
          tmp.add(card[i] + card[j] + card[k]);
        }
      }
    }
    let a = Array.from(tmp).sort((a, b) => b - a);
    answer = a[k - 1];
    return answer;
  }

  let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
  console.log(solution(10, 3, arr));
})();
(() => {
  function solution(n, k, card) {
    let answer;
    let arr = [];
    for (let i = 0; i < n - 2; i++) {
      for (let j = i + 1; j < n - 1; j++) {
        for (let k = j + 1; k < n; k++) {
          arr.push(card[i] + card[j] + card[k]);
        }
      }
    }
    arr.sort((e, s) => s - e);
    console.log(arr);
    let single = new Set(arr);
    answer = Array.from(single)[k - 1];
    return answer;
  }

  let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
  console.log(solution(10, 3, arr));
})();
(() => {
  function solution(n, k, card) {
    let answer;
    let single = new Set();
    let arr = [];
    for (let i = 0; i < n - 2; i++) {
      for (let j = i + 1; j < n - 1; j++) {
        for (let k = j + 1; k < n; k++) {
          single.add(card[i] + card[j] + card[k]);
        }
      }
    }
    answer = Array.from(single).sort((e, s) => s - e)[k - 1];
    console.log(single.size);
    return answer;
  }

  let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
  console.log(solution(10, 3, arr));
})();

//55555555555555555555555555555555555555555555555
//효율성(투포인터 알고리즘, 슬라이딩윈도우, 해쉬)

//5-1 두배열 합치기
(() => {
  function solution(arr1, arr2) {
    let answer = [];
    let n = arr1.length;
    let m = arr2.length;
    let p1 = (p2 = 0);
    while (p1 < n && p2 < m) {
      if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
      else answer.push(arr2[p2++]);
    }
    while (p1 < n) answer.push(arr1[p1++]);
    while (p2 < m) answer.push(arr2[p2++]);
    return answer;
  }

  let a = [1, 3, 5];
  let b = [2, 3, 6, 7, 9];
  console.log(solution(a, b));
})();
(() => {
  function solution(arr1, arr2) {
    let answer = [];
    let ap = (bp = 0);
    while (![arr1[ap], arr2[bp]].includes(undefined)) {
      if (arr1[ap] < arr2[bp]) answer.push(arr1[ap++]);
      else answer.push(arr2[bp++]);
    }
    if (!arr1[ap]) answer.push(...arr2.splice(bp, arr2.length));
    else if (!arr2[bp]) answer.push(...arr1.splice(ap, arr1.length));
    return answer;
  }

  let a = [1, 3, 5];
  let b = [2, 3, 6, 7, 9];
  console.log(solution(a, b));
})();
(() => {
  function solution(arr1, arr2) {
    let answer = [];
    let ap = (bp = 0);
    let n = arr1.length;
    let m = arr2.length;
    while (ap < n && bp < m) {
      if (arr1[ap] < arr2[bp]) answer.push(arr1[ap++]);
      else answer.push(arr2[bp++]);
    }
    while (bp < m) answer.push(arr2[bp++]);
    while (ap < n) answer.push(arr1[ap++]);
    return answer;
    //5-1다시
  }

  let a = [1, 3, 5];
  let b = [2, 3, 6, 7, 9];
  console.log(solution(a, b));
})();
//5-2 공통원소구하기
(() => {
  function solution(arr1, arr2) {
    let answer = [];
    arr1.sort();
    arr2.sort();
    let p1 = (p2 = 0);
    while (p1 < arr1.length && p2 < arr2.length) {
      if (arr1[p1] == arr2[p2]) {
        answer.push(arr1[p1++]);
        p2++;
      } else if (arr1[p1] < arr2[p2]) p1++;
      else p2++;
    }
    return answer;
  }

  let a = [1, 3, 9, 5, 2];
  let b = [3, 2, 5, 7, 8];
  console.log(solution(a, b));
})();
(() => {
  function solution(arr1, arr2) {
    let answer = [];
    arr1.sort((e, s) => e - s);
    arr2.sort((e, s) => e - s);
    let ap = (bp = 0);
    while (ap < arr1.length && bp < arr2.length) {
      if (arr1[ap] < arr2[bp]) {
        ap++;
      } else if (arr1[ap] > arr2[bp]) {
        bp++;
      } else if (arr1[ap] === arr2[bp]) {
        answer.push(arr1[ap]);
        ap++;
        bp++;
      }
    }
    return answer;
  }

  let a = [1, 3, 9, 5, 2];
  let b = [3, 2, 5, 7, 8];
  console.log(solution(a, b));
})();
//5-1 두배열 합치기
(() => {})();
//5-1 두배열 합치기
(() => {})();
//5-1 두배열 합치기
(() => {})();
//5-1 두배열 합치기
(() => {})();
//5-1 두배열 합치기
(() => {})();
//5-1 두배열 합치기
(() => {})();
