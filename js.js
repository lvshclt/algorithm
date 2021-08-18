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
//3-2 유효한 펠린드롬
(() => {})();
//3-2 유효한 펠린드롬
(() => {})();
//3-2 유효한 펠린드롬
(() => {})();
//3-2 유효한 펠린드롬
(() => {})();
//3-2 유효한 펠린드롬
(() => {})();
//3-2 유효한 펠린드롬
(() => {})();
//3-2 유효한 펠린드롬
(() => {})();
//3-2 유효한 펠린드롬
(() => {})();
