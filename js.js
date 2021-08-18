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

//2-1 큰 수 출력하기
(() => {})();

//2-1 큰 수 출력하기
(() => {})();

//2-1 큰 수 출력하기
(() => {})();

//2-1 큰 수 출력하기
(() => {})();

//2-1 큰 수 출력하기
(() => {})();

//2-1 큰 수 출력하기
(() => {})();

//2-1 큰 수 출력하기
(() => {})();

//2-1 큰 수 출력하기
(() => {})();

//2-1 큰 수 출력하기
(() => {})();
