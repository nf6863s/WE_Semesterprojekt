<template>
  <h1>Hexapawn</h1>
  <h3>How to build a game-learning machine and then teach it to play and to win</h3>
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
</template>

<script>
export default {
  name: "Hexapawn",
  data() {
    return {
      board: [],
      pawns: [],
      selected_pawn: 0,
      highlighted_fields: [],
      test: () => {}
    }
  },
  methods: {
    click_pawn(id) {
      console.log("reached");
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
      let legal_moves = this.get_legal_moves(id, true);
      console.log(legal_moves);

      // Add CSS Highlighting to fields that can be moved to and add click-event to move the pawn
      for (let move of legal_moves) {
        let id = move[0] + '' + move[1];
        let field = document.getElementById(id);
        field.classList.add('highlight');
        this.highlighted_fields.push(id);

        let move_function = () => this.move_pawn(id);

        // Providing closure for internal function to allow click-event to handle function call
        //const move_function = this.test;
        field.addEventListener('click', move_function);

        this.test = move_function;
      }
    },

    init_pawns() {
      this.pawns = new Map();
      this.pawns.set(1, {pos: [0, 0], white: true});
      this.pawns.set(2, {pos: [0, 1], white: true});
      this.pawns.set(3, {pos: [0, 2], white: true});

      this.pawns.set(4, {pos: [2, 0], white: false});
      this.pawns.set(5, {pos: [2, 1], white: false});
      this.pawns.set(6, {pos: [2, 2], white: false});
    },

    init_field() {
      this.board = [[1,2,3],[0,0,0],[4,5,6]];
    },

    get_legal_moves(id, white) {
      let pawn = this.pawns.get(id);
      let pos = pawn.pos;
      let moves = [];

      if (white) {
        // Check if field in front of pawn is empty and if it is, add the move to the legal move list
        if (this.get_pawn_at_pos(pos[0] + 1, pos[1]) === 0) {
          moves.push([pos[0] + 1, pos[1]]);
        }

        console.log('getmoves', pos);

        // Check if pawn can attack diagonally left
        if (pos[1] > 0 && this.get_pawn_at_pos(pos[0] + 1, pos[1] - 1) !== 0) {
          console.log("left attack");
          moves.push([pos[0] + 1, pos[1] - 1]);
        }

        // Check if pawn can attack diagonally right
        if (pos[1] < 2 && this.get_pawn_at_pos(pos[0] + 1, pos[1] + 1) !== 0) {
          moves.push([pos[0] + 1, pos[1] + 1]);
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

        const move_function = this.test;
        field.removeEventListener('click', move_function);
      }

      this.highlighted_fields = [];
    },

    move_pawn(id) {
      // Use this.selected_pawn as indicator which pawn should be moved
      console.log("test", id, this.selected_pawn);
      let field = document.getElementById(id);

      // Check if a pawn has been taken
      let pawn_at_position = this.get_pawn_at_pos(id[0], id[1]);

      if (pawn_at_position !== 0) {
        this.pawns.delete(pawn_at_position);
        document.getElementById(pawn_at_position).remove();
      }

      let pawn_prev_pos = document.getElementById(this.selected_pawn);
      pawn_prev_pos.parentElement.classList.remove('selected');
      pawn_prev_pos.remove();
      field.appendChild(pawn_prev_pos);

      let pawn = this.pawns.get(this.selected_pawn);
      let oldPos = pawn.pos;
      let newPos = [id[0], id[1]];

      this.board[oldPos[0]][oldPos[1]] = 0;
      this.board[newPos[0]][newPos[1]] = this.selected_pawn;

      pawn.pos = newPos;

      console.log(this.pawns.get(this.selected_pawn));

      console.log(this.board);

      this.remove_highlighting();
      this.selected_pawn = 0;
    }
  },
  mounted() {
    this.init_pawns();
    this.init_field();
  }
}
</script>

<style scoped>
  .chessboard {
    margin: auto;
    border-style: inset;
  }

  .field {
    width: 100px;
    height: 100px;
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

</style>