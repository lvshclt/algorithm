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
//1-14 가운데문자 출력
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
//1-13 대소문자 변환
(() => {})();
//1-13 대소문자 변환
(() => {})();
//1-13 대소문자 변환
(() => {})();
