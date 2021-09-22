<template>
  <h1>Hexapawn</h1>
  <h3>How to build a game-learning machine and then teach it to play and to win</h3>
  <h3 class="tutorial-expand" v-on:click="toggle_tutorial()">For a tutorial click here <font-awesome-icon :class="{hidden: show_tutorial}" icon="chevron-down"/><font-awesome-icon :class="{hidden: !show_tutorial}" icon="chevron-up"/></h3>
  <div class="how-to-play" v-bind:class="{hidden: !show_tutorial}">
    <h3>How to Play</h3>
    <div>
      Hexapawn is basically Chess, but smaller (and maybe even better). <br>It is played on a 3x3 Board with 3 Pawns each.
      <br>
      The Pawns can move just like a normal Pawn could in Chess.
      <br>
      So one field ahead if it is empty or one field diagonally forward, if there is an opponents Pawn to attack.
      <div>
        <table class="chessboard">
          <tr>
            <td class="tutorial-field black highlight"><font-awesome-icon class="pawn pawn-black" icon="chess-pawn"/></td>
            <td class="tutorial-field white highlight"></td>
          </tr>
          <tr>
            <td class="tutorial-field white"></td>
            <td class="tutorial-field black"><font-awesome-icon class="pawn pawn-white" icon="chess-pawn"/></td>
          </tr>
        </table>
      </div>
      <br>
      White (You) will always have the first move.
      <br>
      <br>
      There are three possible ways to win the Game:
      <ol class="tutorial-list">
        <li>
          <span>Get your Pawn to the other Side of the field</span>
          <div>
            <table class="chessboard">
              <tr>
                <td class="tutorial-field black"><font-awesome-icon class="pawn pawn-black" icon="chess-pawn"/></td>
                <td class="tutorial-field white selected"><font-awesome-icon class="pawn pawn-white" icon="chess-pawn"/></td>
              </tr>
              <tr>
                <td class="tutorial-field white"></td>
                <td class="tutorial-field black"></td>
              </tr>
            </table>
          </div>
        </li>
        <li>
          <span>Leave the Opponent with no legal moves on his next turn</span>
          <div>
            <table class="chessboard">
              <tr>
                <td class="tutorial-field black"><font-awesome-icon class="pawn pawn-black" icon="chess-pawn"/></td>
                <td class="tutorial-field white"></td>
              </tr>
              <tr>
                <td class="tutorial-field white"><font-awesome-icon class="pawn pawn-white" icon="chess-pawn"/></td>
                <td class="tutorial-field black"></td>
              </tr>
            </table>
          </div>
        </li>
        <li>
          <span>Take all of the Opponents Pawns</span>
          <div>
            <table class="chessboard">
              <tr>
                <td class="tutorial-field black"></td>
                <td class="tutorial-field white"></td>
              </tr>
              <tr>
                <td class="tutorial-field white"><font-awesome-icon class="pawn pawn-white" icon="chess-pawn"/></td>
                <td class="tutorial-field black"><font-awesome-icon class="pawn pawn-white" icon="chess-pawn"/></td>
              </tr>
            </table>
          </div>
        </li>
      </ol>
    </div>
    <h3>How the Opponent learns</h3>
    <div>
      The Game Hexapawn was invented by American Mathematician Martin Gardner,<br>
      who was the Author for the Column "Mathematical Games" in the Journal "Scientific American" <br>

    </div>
    <h3 class="tutorial-expand" v-on:click="toggle_tutorial()">Hide Tutorial <font-awesome-icon icon="chevron-up"/></h3>

  </div>
  <div class="container">
    <table class="chessboard">
      <tr>
        <td>3</td>
        <td class="field black" id="20"><font-awesome-icon class="pawn pawn-black" id="4"  icon="chess-pawn"/></td>
        <td class="field white" id="21"><font-awesome-icon class="pawn pawn-black" id="5"  icon="chess-pawn"/></td>
        <td class="field black" id="22"><font-awesome-icon class="pawn pawn-black" id="6"  icon="chess-pawn"/></td>
      </tr>
      <tr>
        <td>2</td>
        <td class="field white" id="10"></td>
        <td class="field black" id="11"></td>
        <td class="field white" id="12"></td>
      </tr>
      <tr>
        <td>1</td>
        <td class="field black" id="00"><font-awesome-icon class="pawn pawn-white" id="1" icon="chess-pawn" v-on:click="click_pawn(1)"/></td>
        <td class="field white" id="01"><font-awesome-icon class="pawn pawn-white" id="2" icon="chess-pawn" v-on:click="click_pawn(2)"/></td>
        <td class="field black" id="02"><font-awesome-icon class="pawn pawn-white" id="3" icon="chess-pawn" v-on:click="click_pawn(3)"/></td>
      </tr>
      <tr>
        <td></td>
        <td>A</td>
        <td>B</td>
        <td>C</td>
      </tr>
    </table>
    <scoreboard ref="scoreboard" class="scoreboard"></scoreboard>
  </div>
</template>

<script>
import Scoreboard from "@/components/Scoreboard";
export default {
  name: "Hexapawn",
  components: {Scoreboard},
  data() {
    return {
      board: [],
      pawns: [],
      pawn_icons: [],
      selected_pawn: 0,
      highlighted_fields: [],
      move_pawn_function: new Map(),
      move_number: 0,
      last_move_black: [],
      winner: '',

      show_tutorial: false,

      move_response_list: {}
    }
  },
  methods: {
    click_pawn(id) {
      // remove previously selected pawns css highlighting
      if (this.selected_pawn > 0) {
        let prevPawn = document.getElementById(this.selected_pawn);
        prevPawn.parentElement.classList.remove('selected');
        this.remove_highlighting();
      }

      // return after removing highlighting for toggle-like interaction after clicking same pawn twice
      if (this.selected_pawn === id) {
        this.selected_pawn = 0;
        return;
      }

      // add css highlighting to selected pawn
      let pawn = document.getElementById(id);
      pawn.parentElement.classList.add('selected');
      this.selected_pawn = id;

      // Get all possible moves for selected pawn
      let legal_moves = this.get_legal_moves(this.board, this.pawns.get(this.selected_pawn).pos, true);

      // Add CSS Highlighting to fields that can be moved to and add click-event to move the pawn
      for (let move of legal_moves) {
        let id = move[0] + '' + move[1];
        let field = document.getElementById(id);
        field.classList.add('highlight');
        this.highlighted_fields.push(id);

        let move_function = () => this.move_pawn(this.selected_pawn, id, true);

        // Providing closure for internal function to allow click-event to handle function call
        //const move_function = this.test;
        field.addEventListener('click', move_function, { once: true});

        this.move_pawn_function.set(id, move_function);
      }
    },

    init_pawns() {
      this.pawns = new Map();
      this.pawns.set(1, this.pawn_object_factory(1, [0, 0], true));
      this.pawns.set(2, this.pawn_object_factory(2, [0, 1], true));
      this.pawns.set(3, this.pawn_object_factory(3, [0, 2], true));

      this.pawns.set(4, this.pawn_object_factory(4, [2, 0], false));
      this.pawns.set(5, this.pawn_object_factory(5, [2, 1], false));
      this.pawns.set(6, this.pawn_object_factory(6, [2, 2], false));

      this.pawn_icons = new Map();
      this.pawn_icons.set(1, document.getElementById('1').cloneNode(true));
      this.pawn_icons.set(2, document.getElementById('2').cloneNode(true));
      this.pawn_icons.set(3, document.getElementById('3').cloneNode(true));
      this.pawn_icons.set(4, document.getElementById('4').cloneNode(true));
      this.pawn_icons.set(5, document.getElementById('5').cloneNode(true));
      this.pawn_icons.set(6, document.getElementById('6').cloneNode(true));
    },

    pawn_object_factory(id, pos, white) {
      let new_pawn = {};
      new_pawn.id = id;
      new_pawn.pos = pos;
      new_pawn.white = white;

      new_pawn.setPos = (pos) => { new_pawn.pos = pos };
      new_pawn.getPos = () => { return new_pawn.pos };

      new_pawn.getId = () => { return new_pawn.id };
      new_pawn.isWhite = () => { return new_pawn.white };

      return new_pawn;
    },

    init_board() {
      this.board[0] = [1,2,3];
      this.board[1] = [0,0,0];
      this.board[2] = [4,5,6];
    },

    get_legal_moves(board, pos, white) {
      let moves = [];

      if (white) {
        // Check if field in front of pawn is empty and if it is, add the move to the legal move list
        if (board[pos[0] + 1][pos[1]] === 0) {
          moves.push([pos[0] + 1, pos[1]]);
        }

        // Check if pawn can attack diagonally left and is opponents Pawn
        let pawn_at_next_pos = board[pos[0] + 1][pos[1] - 1];
        // pawn_at_next_pos > 3 = black pawns
        if (pos[1] > 0 && pawn_at_next_pos !== 0 && pawn_at_next_pos > 3) {
          moves.push([pos[0] + 1, pos[1] - 1]);
        }

        pawn_at_next_pos = board[pos[0] + 1][pos[1] + 1];
        // Check if pawn can attack diagonally right and is opponents Pawn
        if (pos[1] < 2 && pawn_at_next_pos !== 0 && pawn_at_next_pos > 3) {
          moves.push([pos[0] + 1, pos[1] + 1]);
        }
      } else {
        // Legal moves for Black:
        // Check if field in front of pawn is empty and if it is, add the move to the legal move list
        if (board[pos[0] - 1][pos[1]] === 0) {
          moves.push([pos[0] - 1, pos[1]]);
        }

        // Check if pawn can attack diagonally left and is opponents Pawn
        let pawn_at_next_pos = board[pos[0] - 1][pos[1] - 1];
        // pawn_at_next_pos < 4 = white pawns
        if (pos[1] > 0 && pawn_at_next_pos !== 0 && pawn_at_next_pos < 4) {
          moves.push([pos[0] - 1, pos[1] - 1]);
        }

        pawn_at_next_pos = board[pos[0] - 1][pos[1] + 1];
        // Check if pawn can attack diagonally right and is opponents Pawn
        if (pos[1] < 2 && pawn_at_next_pos !== 0 && pawn_at_next_pos < 4) {
          moves.push([pos[0] - 1, pos[1] + 1]);
        }
      }

      return moves;
    },

    get_pawn_at_pos(x, y) {
      let id = this.board[x][y];

      if (id === 0) {
        return 0;
      } else {
        return id;
      }
    },

    remove_highlighting() {
      for (let id of this.highlighted_fields) {
        let field = document.getElementById(id);
        field.classList.remove('highlight');

        const move_function = this.move_pawn_function.get(id);
        field.removeEventListener('click', move_function, { once: true});
        this.move_pawn_function.delete(id);
      }

      this.highlighted_fields = [];
    },

    move_pawn(pawn_to_move, id, white) {
      // Use this.selected_pawn as indicator which pawn should be moved
      let field = document.getElementById(id);

      // Coordinates as ints
      let x = parseInt(id[0]);
      let y = parseInt(id[1]);


      // Check if a pawn has been taken
      let pawn_at_position = this.get_pawn_at_pos(x, y);

      if (pawn_at_position !== 0) {
        this.pawns.delete(pawn_at_position);
        document.getElementById(pawn_at_position).remove();
      }

      let pawn_prev_pos = document.getElementById(pawn_to_move);
      if (pawn_prev_pos !== null) {
        pawn_prev_pos.parentElement.classList.remove('selected');
        pawn_prev_pos.remove();
        field.appendChild(pawn_prev_pos);
      }

      let pawn = this.pawns.get(pawn_to_move);
      let oldPos = pawn.getPos();
      let newPos = [x, y];

      this.board[oldPos[0]][oldPos[1]] = 0;
      this.board[x][y] = pawn_to_move;

      pawn.setPos(newPos);

      if (white) {
        this.remove_highlighting();
        this.selected_pawn = 0;
      }

      this.move_number++;

      // Check if player has won
      let game_over = this.check_win_conditions(white);

      setTimeout(()=> {
        if (game_over) {
          this.winner = white ? 'white': 'black';
          this.game_over();
        } else if (white) {
          this.make_opponent_move();
        }
      }, 250);

    },

    check_win_conditions(white) {

      // 1. Win Condition: Pawn at opponents end of the board
      for (let i = 0; i < 3; i++) {
        // Check for black pawns at white side of the board
        let pawn_id = this.get_pawn_at_pos(0, i);

        if (pawn_id > 0 && !this.pawns.get(pawn_id).isWhite()) {
          return true;
        }

        // Check for white pawns at black side of the board
        pawn_id = this.get_pawn_at_pos(2, i);

        if (pawn_id > 0 && this.pawns.get(pawn_id).isWhite()) {
          return true;
        }
      }

      // 2. Win Condition: Opponent has no more Pawns left
      // 3. Win Condition: Opponent has no more legal moves

      let prev_pawn_color = null;
      let no_pawns_left = true;
      let no_legal_moves_left = true;

      for (let pawn of this.pawns.values()) {

        // Check if all Pawns have the same color
        if (prev_pawn_color === null) {
          prev_pawn_color = pawn.isWhite();
        } else if (prev_pawn_color ^ pawn.isWhite()) {
          no_pawns_left = false;
        }

        // if there is at least one pawn with a legal move, 3. win condition is not met
        if (no_legal_moves_left && pawn.isWhite() !== white && this.get_legal_moves(this.board, pawn.getPos(), pawn.isWhite()).length > 0) {
          no_legal_moves_left = false;
        }
      }

      return no_pawns_left || no_legal_moves_left;
    },

    make_opponent_move() {
      for (let i = 0; i < this.move_response_list.moves.length; i++) {
        let move = this.move_response_list.moves[i];
        if (move.move === this.move_number + 1 && this.compareToCurrentBoard(move.board) && move.possible_moves.length > 0) {
          let random_selection = parseInt(Math.random() * move.possible_moves.length);
          let random_selected_move = move.possible_moves[random_selection];
          this.last_move_black = [i, random_selection];
          this.move_pawn(random_selected_move.id, random_selected_move.move_to[0] + '' + random_selected_move.move_to[1], false);
        } else if (move.move === this.move_number + 1 && this.compareToCurrentBoard(move.board) && move.possible_moves.length === 0){
          // probably need to play a random legal move anyways to continue interaction with player
          //console.log('no more moves - black looses');
        }
      }
    },

    init_opponent_move_list() {
      /* initial board stat
          1 2 3
          0 0 0
          4 5 6
      */

      // Shallow copy does not suffice for multi-dimensional array
      //let test_board = [...this.board];
      let test_board = this.deep_copy_array(this.board);
      this.move_response_list = {"moves": []}

      this.recursively_init_move_response_list(test_board, this.move_response_list, 2);

      console.log(this.move_response_list.moves.sort((moveA, moveB) => {return Math.sign(moveA.move - moveB.move)}));
    },

    recursively_init_move_response_list(curr_board, move_response_list, move_depth) {
      let test_board = this.deep_copy_array(curr_board);
      let pawn_pos_list = this.get_pawn_positions(test_board);

      // Check if one side has no more pawns
      let white_pawns = 0;
      let black_pawns = 0;

      for (let k = 0; k < 3; k++) {
        white_pawns += pawn_pos_list[k].length > 0 ? 1 : 0;
        black_pawns += pawn_pos_list[k + 3].length > 0 ? 1 : 0;
      }

      if (white_pawns === 0 || black_pawns === 0) {
        return;
      }

      for (let i = 0; i < 3; i++) {
        // Continue if pawn with id i no longer exists
        if (pawn_pos_list[i].length === 0) {
          continue;
        }

        let legal_moves_white = this.get_legal_moves(test_board, pawn_pos_list[i], true);

        for (let move of legal_moves_white) {
          // Need to check, if pawn_pos_list was changed in line 348 and revert that change if possible
          pawn_pos_list = this.get_pawn_positions(test_board);
          let board_after_move = this.simulate_game_state(test_board, pawn_pos_list[i], move);

          // Check board for white win by promotion
          if (this.check_board_for_promotion(board_after_move)) {
            continue;
          }

          // Need to check, if white takes a black pawn in the previous move-simulation
          pawn_pos_list = this.get_pawn_positions(board_after_move);

          let possible_moves_black = [];
          let boards_next_depth = [];
          for (let j = 3; j < 6; j++) {
            // Continue if pawn with id j no longer exists
            if (pawn_pos_list[j].length === 0) {
              continue;
            }
            let legal_moves_black = this.get_legal_moves(board_after_move, pawn_pos_list[j], false);

            for (let move_black of legal_moves_black) {
              possible_moves_black.push({"id": j + 1, "move_to": move_black});
              boards_next_depth.push(this.simulate_game_state(board_after_move, pawn_pos_list[j], move_black));
            }
          }

          if (possible_moves_black.length > 0) {
            move_response_list.moves.push({
              "move": move_depth,
              "board": board_after_move,
              "possible_moves": possible_moves_black
            });

            if (move_depth < 6) {
              for (let board_next_depth of boards_next_depth) {
                // Check if black has won on this move and if it did, no need to calculate further
                if (this.check_board_for_promotion(board_next_depth)) {
                  continue;
                }
                this.recursively_init_move_response_list(board_next_depth, move_response_list, move_depth + 2);
              }
            }
          }
        }
      }
    },

    get_pawn_positions(board) {
      let pawn_pos_list = [[],[],[],[],[],[]];
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[i][j] > 0) {
            pawn_pos_list[parseInt(board[i][j]) - 1] = [i, j];
          }
        }
      }

      return pawn_pos_list;
    },

    simulate_game_state(board, pawn_pos, move) {
        let internal_board = this.deep_copy_array(board);
        let pawn_id = board[pawn_pos[0]][pawn_pos[1]];
        internal_board[pawn_pos[0]][pawn_pos[1]] = 0;
        internal_board[move[0]][move[1]] = pawn_id;

        return internal_board;
    },

    deep_copy_array(arr) {
      return JSON.parse(JSON.stringify(arr));
    },

    check_board_for_promotion(board_after_move) {
      for (let i = 0; i < 3; i++) {
        if (board_after_move[0][i] > 3 || (board_after_move[2][i] < 4 && board_after_move[2][i] > 0)) {
          return true;
        }
      }

      return false;
    },

    compareToCurrentBoard(board) {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (this.board[i][j] !== board[i][j]) {
            return false;
          }
        }
      }
      return true;
    },

    game_over() {
      alert(this.winner + ' has won');

      // remove last used move of black (learn from mistake)
      if (this.winner === 'white') {
        let i = this.last_move_black[0];
        let moveIndex = this.last_move_black[1];

        if (moveIndex > -1) {
          this.move_response_list.moves[i].possible_moves.splice(moveIndex, 1);
        }

        this.last_move_black = [];
        this.winner = '';
        this.$refs.scoreboard.updateScore(0);
      } else {
        this.$refs.scoreboard.updateScore(1);
      }

      //this.get_wr_for_last_ten_games();

      // reset board-state
      for (let i = 0; i < 6; i++) {
        let old_pawn_icon = document.getElementById((i + 1) + '');
        let new_pawn_icon = this.pawn_icons.get(i + 1);

        if (old_pawn_icon !== null) {
          old_pawn_icon.remove();
        }

        if (i < 3) {
          const click_pawn = () => this.click_pawn(i + 1);
          new_pawn_icon.addEventListener('click', click_pawn);
        }

        let field = document.getElementById((i < 3) ? ('0' + i): ('2' + i - 3));

        field.appendChild(new_pawn_icon);
      }

      this.move_number = 0;
      this.init_pawns();
      this.init_board();
    },

    toggle_tutorial() {
      this.show_tutorial = !this.show_tutorial;
    }
  },
  mounted() {
    this.init_pawns();
    this.init_board();
    this.init_opponent_move_list();
  }
}
</script>

<style scoped>
  .how-to-play {
    width: 70vw;
    margin: auto auto 100px;
  }

  .chessboard {
    margin: 10px auto auto;
    border-style: inset;
    text-align: center;
  }

  .field {
    width: 100px;
    height: 100px;
  }

  .tutorial-field {
    width: 50px;
    height: 50px;
  }

  .tutorial-list {
    width: fit-content;
    margin: 10px auto auto;
    text-align: left;
  }

  .tutorial-list > li {
    margin-bottom: 30px;
  }

  .tutorial-list > li > div {
    margin-right: 40px;
  }

  .selected {
    background-color: #6a9ebd !important;
  }

  .highlight {
    border: 3px solid red;
  }

  .black {
    background-color: darkcyan;
  }

  .white {
    background-color: #fff;
  }

  .pawn {
    width: 50%;
    height: 50%;
  }

  .pawn-black {
    color: #000;
  }

  .pawn-white {
    color: bisque;
  }

  .scoreboard {
    margin: 50px auto auto;
  }

  .container {
    padding-bottom: 50px;
  }

  .hidden {
    display: none;
  }

  .tutorial-expand {
    cursor: pointer;
    text-decoration: underline;
  }
</style>